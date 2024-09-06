
import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"

import * as S from './styles'
import { useGetPerfilQuery } from '../../services/api'
import { useParams } from "react-router-dom"
import { Restaurantes } from "../../types"
import axios from "axios"

const Perfil = () => {
    let description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    const {id} = useParams()
    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])
    useEffect(() => {
        axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
        .then(res => setRestaurantes(res.data))
        .catch(error => console.log(error))
    },[])

    console.log(id);
    

    //const { data: restaurantes, isLoading } = useGetPerfilQuery()

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
            {restaurantes?.map((item, index) => (
                <Produto
                key={index}
                id={item.id}
                titulo={item.titulo}
                capa={item.capa}
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