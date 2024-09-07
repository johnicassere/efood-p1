import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cardapio } from "../../types";
import axios from "axios";
import iconclose from '../../assets/images/close.png'
import Perfil from "../../pages/Perfil";
import * as S from './styles'

import { useGetCardapioModalQuery } from '../../services/api'


const Modal = () => {
    const {id, produto } = useParams()
   // const { data } = useGetCardapioModalQuery()
    let idItem = parseInt(produto!)
    

    const [cardapio, setCardapio] = useState<Cardapio>()
    useEffect(() => {
        axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
            let index = res.data.cardapio.findIndex((elemento: any) => elemento.id === idItem)
            console.log(index, 'index');
            setCardapio(res.data.cardapio[index])
        
        })
        .catch(error => console.log(error))
        
    },[])



    //console.log(cardapio?.id, 'id modal');
    
    return(

        <>
        <S.DivOver>
            <Perfil />
        </S.DivOver>
        <S.ContainerModal >
            <div className="modal">
                <S.Modal className="overlay">
                    <div className="modal-content">
                            <Link className="icon-close" to={`/perfil/${id}`}><img style={{width:'16px', height:'16px'}} src={iconclose} alt="close" /></Link>
                        
                        <div className="capa-item">
                                <img src={cardapio?.foto} alt={''} />
                            <div className="descricao">
                            <h2>{cardapio?.nome}</h2>
                            <p>
                            {cardapio?.descricao}
                            {cardapio?.descricao}
                            </p>
                            <br />
                            <p>
                            {cardapio?.porcao}
                            </p>
                                <div>
                                    <Link to={'/cart'} className="close-modal" ><button>adicionar ao carrinho - R${cardapio?.preco}</button></Link>
                                   
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