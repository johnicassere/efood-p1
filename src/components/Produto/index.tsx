import { useState } from "react"
import * as S from "./styles"
import { Link } from "react-router-dom"
import { Restaurantes } from "../../types"

type Props = {
    id?: number
    titulo?: string
    capa?: string
    descricao?: string
    openCart?: () => boolean | void 
}




const Produto = ({titulo, capa, descricao, openCart }: Props) => {
    const [openOver, setOpenOver] = useState(false)
  
    const openOverlay = () => {
        if(openOver === false){
            setOpenOver(true)
            console.log(openCart)   
        }else{
            setOpenOver(false)
        }
    }

      
    return(
       <>
        <S.ContainerProduto>
            <div>
                <a href="/cart"><img src={capa} alt={titulo} /></a>
            </div>
                <h2>{titulo}</h2>
            <p>
                {descricao}
            </p>
             <div className="adicionar">
                <button onClick={openOverlay} >Adicionar ao carrinho</button>
             </div>  
        </S.ContainerProduto>
        </>
    )
}


export default Produto