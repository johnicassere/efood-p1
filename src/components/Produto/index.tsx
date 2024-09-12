import { useState } from "react"
import { useParams } from "react-router-dom"
import Modal from "../Modal"
import * as S from "./styles"




const Produto = ({ nome, foto, descricao, porcao, preco }: Cardapio) => {
  const {id} = useParams()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const paramsId = parseInt(`${id}`)

  
  

  const carrinho = () => {
    setOpenModal(!openModal)  
  }

 
    return(
       <>
            <S.ContainerProduto>
            <div> 
                <img src={foto} alt={nome} onClick={carrinho}/>
            </div>
                <h2>{nome}</h2>
            <p>
                {descricao}
            </p>
             <div className="adicionar">
                <button onClick={carrinho} className="link-modal">Adicionar ao carrinho</button>
             </div>  
        </S.ContainerProduto>
        <Modal
        setOpenModal={setOpenModal}
        isOpen={openModal} 
        nome={nome}
        foto={foto}
        descricao={descricao}
        porcao={porcao}
        preco={preco}
        id={paramsId}
        />
        </>
    )
}

export default Produto
