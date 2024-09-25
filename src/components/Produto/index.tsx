import { useState } from "react"
import { useParams } from "react-router-dom"
import Modal from "../Modal"
import * as S from "./styles"


type Props = {
  id?: number
   nome?: string
   foto?: string
   descricao: string
   porcao?: string
   preco?: number
 }


const Produto = ({ descricao, foto, nome, porcao, preco, id }: Props) => {
  
  const [openModal, setOpenModal] = useState<boolean>(false)
 
 
    const cardapioModal = {
      id,
      nome,
      foto,
      descricao,
      porcao,
      preco
    }


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
        cardapio={cardapioModal} 
        />
        </>
    )
}

export default Produto
