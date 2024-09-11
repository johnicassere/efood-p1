
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
    const {id} = useParams()
    const [cardapio, setCardapio] = useState<Cardapio[]>([])
    const [restaurante, setRestaurante] = useState<Restaurantes>()
   
    

    useEffect(() => {
        axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
            setRestaurante(res.data)
            setCardapio(res.data.cardapio)
    })
        .catch(error => console.log(error))
    },[])


    const getDescription = (text: string) => {
        if(text.length > 140){
            return text.slice(0, 140) + '...'
        }
        return text
    }
    
    console.log(cardapio);
    
    return(
      <>
        <Header capa={restaurante?.capa} tipo={restaurante?.tipo} titulo={restaurante?.titulo}/>
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