import { useEffect, useState } from "react";
import * as S from './styles'
import iconclose from '../../assets/images/close.png'
import { Link, useParams } from "react-router-dom";
import Perfil from "../../pages/Perfil";
import { Restaurantes } from "../../types";
import axios from "axios";




const Modal = () => {
const [modal, setModal] = useState<boolean>(false)
const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])
const {id, nome, foto, descricao, preco, porcao} = useParams()

console.log(id, 'log id');


useEffect(() => {
    axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${nome}`)
    .then(res => setRestaurantes(res.data))
    .catch(error => console.log(error))
    
},[])

    console.log(restaurantes);
    
    return(

        <>
        <S.DivOver>
            <Perfil />
        </S.DivOver>
        <S.ContainerModal >
            <div className="modal">
                <S.Modal className="overlay" onClick={() => setModal(!modal)}>
                    <div className="modal-content">
                            <Link className="icon-close" to={'/perfil'}><img style={{width:'16px', height:'16px'}} src={iconclose} alt="close" /></Link>
                        
                        <div className="capa-item">
                                <img src={foto} alt={''} />
                            <div className="descricao">
                            <h2>{nome}</h2>
                            <p>
                            {descricao}
                            </p>
                            <br />
                            <p>
                            Serve: de 2 a 3 pessoas
                            {porcao}
                            </p>
                                <div>
                                    <Link to={'/cart'} className="close-modal" ><button>adicionar ao carrinho - R${preco}69,90</button></Link>
                                   
                                </div>
                            </div>

                        </div>
                 
    
                </div>
            </S.Modal>
        </div> 
        </S.ContainerModal>
        
        </>
    )
}


export default Modal