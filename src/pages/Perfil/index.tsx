
import { useEffect, useState } from "react"
import axios from 'axios'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"
import { Restaurantes } from "../../types"
import * as S from './styles'



const Perfil = () => {
    let description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])
    

    const getDescription = (text: string) => {
        if(text.length > 138){
            return text.slice(0, 138) + '...'
        }
        if(!text){
            return description
        }
        return text
    }

    useEffect(() => {
        axios.get('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => setRestaurantes(res.data))
        .catch(error => console.log(error))
    },[])
    


    return(
      <>
    
        <Header/>
        <S.ConatinerPerfil>
            <>
            {restaurantes.map((item) => (
                <Produto
                id={item.id}
                titulo={item.titulo!}
                capa={item.capa!}
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