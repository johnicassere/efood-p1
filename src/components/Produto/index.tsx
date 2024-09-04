import * as S from "./styles"
import { Link } from "react-router-dom"



type Props = {
    id?: number
    titulo: string
    capa: string
    descricao?: string
    preco?: number
}


const Produto = ({titulo, capa, descricao }: Props) => {
  
 
    return(
       <>
            <S.ContainerProduto>
            <div>
                <Link to={`/modal/${titulo}`} ><img src={capa} alt={titulo} /></Link>
            </div>
                <h2>{titulo}</h2>
            <p>
                {descricao}
            </p>
             <div className="adicionar">
                <Link to={`/modal/${titulo}`} className="link-modal">Adicionar ao carrinho</Link>
             </div>  
        </S.ContainerProduto>
        </>
    )
}


export default Produto

