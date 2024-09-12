import { useState } from "react"
import * as S from "./styles"
import { useNavigate, useParams } from "react-router-dom"
import Modal from "../Modal"


type Props = {
    id?: number
    nome: string
    foto: string
    descricao?: string
    preco?: number
    porcao?: string
}


const Produto = ({nome, foto, descricao, id: idProduto, porcao, preco }: Props) => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState<boolean>(false)
  const paramsId = parseInt(`${id}`)

  const carrinho = () => {
    //let rotaCarrinho = `/modal/${id}/${idProduto?.toString()}`
   // navigate(`${rotaCarrinho}`)
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
