import { useState } from "react"
import * as S from "./styles"
import { Link, useNavigate, useParams } from "react-router-dom"
import Modal from "../Modal"


type Props = {
    id?: number
    nome: string
    foto: string
    descricao?: string
    preco?: number
}


const Produto = ({nome, foto, descricao, id: idProduto }: Props) => {
  const {id} = useParams()
  const navigate = useNavigate()
 
  
  const carrinho = () => {
    let rotaCarrinho = `/modal/${id}/${idProduto?.toString()}`
    navigate(`${rotaCarrinho}`)
    
  }
 
    return(
       <>
            <S.ContainerProduto>
            <div> 
                <img src={foto} alt={nome} onClick={carrinho} />
            </div>
                <h2>{nome}</h2>
            <p>
                {descricao}
            </p>
             <div className="adicionar">
                <Link to={`/modal/${id}/${idProduto?.toString()}`} className="link-modal">Adicionar ao carrinho</Link>
             </div>  
        </S.ContainerProduto>
        </>
    )
}


export default Produto

