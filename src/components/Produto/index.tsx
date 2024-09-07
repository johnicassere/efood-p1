import * as S from "./styles"
import { Link, useParams } from "react-router-dom"


type Props = {
    id?: number
    nome: string
    foto: string
    descricao?: string
    preco?: number
}


const Produto = ({nome, foto, descricao, id: idProduto }: Props) => {
  const {id} = useParams()
//   let idFinal;
//   if(idProduto){
//     idFinal = idProduto -1 
//   }
 
    return(
       <>
            <S.ContainerProduto>
            <div>
                <Link to={`/modal/${id}/${idProduto?.toString()}`} ><img src={foto} alt={nome} /></Link>
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

