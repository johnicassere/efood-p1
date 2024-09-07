
import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"

import * as S from './styles'
import { useGetPerfilQuery } from '../../services/api'
import { useParams } from "react-router-dom"
import { Cardapio, Restaurantes } from "../../types"
import axios from "axios"

const Perfil = () => {
    let description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    const {id} = useParams()
    const [cardapio, setCardapio] = useState<Cardapio[]>([])
    useEffect(() => {
        axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
            setCardapio(res.data.cardapio)
    })
        .catch(error => console.log(error))
    },[])


    const getDescription = (text: string) => {
        if(text.length > 138){
            return text.slice(0, 138) + '...'
        }
        if(!text){
            return description
        }
        return text
    }

    return(
      <>
    
        <Header/>
        <S.ConatinerPerfil>
            <>
            {cardapio?.map((item, index) => (
                <Produto
                key={index}
                id={item.id}
                nome={item.nome}
                foto={item.foto}
                descricao={getDescription(item.descricao)}
                />  
            ))}
            </>
        </S.ConatinerPerfil>
        <Footer/>
      </>
    )
}


export default Perfil