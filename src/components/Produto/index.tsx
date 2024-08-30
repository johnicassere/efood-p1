import * as S from "./styles"
import image from '../../assets/images/image3.png'
import { useEffect, useState } from "react"
import { Restaurantes } from "../../types"

type Props = {
    descricao?: string
}

const Produto = ({ descricao }: Props) => {

    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

    const getDescription = (text: string) => {
        if(text.length > 132){
            return text.slice(0, 129) + '...'
        }
        return text
    }

    let description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    
    
    useEffect(() => {

        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setRestaurantes(res))
        .catch(error => console.log(error))
        
    },[])

        
    return(
       <>
        <S.ContainerProduto>
            <div>
                <a href="/"><img src={image} alt="Pizza" /></a>
            </div>
            <h2>Pizza Marguerita</h2>
            <p>
                {getDescription(description)}
            </p>
           <div className="adicionar">
                <a href="/">Adicionar ao carrinho</a>
           </div>
        </S.ContainerProduto>
       </>
    )
}


export default Produto