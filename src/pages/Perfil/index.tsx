
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"

import { useGetPerfilQuery, useGetRestauranteQuery } from '../../services/api'
import { useParams } from "react-router-dom"
import * as S from './styles'



const Perfil = () => {
    const {id} = useParams()
    const {data: getRestaurante} = useGetRestauranteQuery(id)
    const {data} = useGetPerfilQuery(id)


    const getDescription = (text: string) => {
        if(text.length > 140){
            return text.slice(0, 140) + '...'
        }
        return text
    }
     

    
    return(
      <>
        <Header capa={getRestaurante?.capa} tipo={getRestaurante?.tipo} titulo={getRestaurante?.titulo}/>
        <S.ConatinerPerfil>
            <>
            {data?.cardapio?.map((item, index) => (
                <Produto
                 key={index}
                 id={item.id}
                 nome={item.nome}
                 foto={item.foto}
                 descricao={getDescription(item.descricao)}
                 preco={item.preco}
                 porcao={item.porcao}
                />  
            ))}
            </>
        </S.ConatinerPerfil>
        <Footer/>
      </>
    )
}


export default Perfil