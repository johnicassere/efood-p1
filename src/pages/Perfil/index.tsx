
import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"
import closeIcon from '../../assets/images/close.png'
import image from '../../assets/images/image3.png'
import * as S from './styles'
import { Restaurantes } from "../../types"
import { Link } from "react-router-dom"
import { ContainerHome } from "../Home/styles"

const Perfil = () => {
    let description = 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])
    const [isOpen,setIsOpen] = useState(false)

    const isOpenCart = () =>{
      return setIsOpen(true)
    }


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

        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(json => {
            setRestaurantes(json);     
        })
        .catch(error => console.log(error))
        
    },[])
   
    return(
        <>
        <Header/>
        <S.ConatinerPerfil>
        {restaurantes.map((item) => (
           <>
            <Produto
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            descricao={getDescription(item.descricao || description)}
            capa={item.capa}
            openCart={isOpenCart}
            />
           </>
        ))}
        </S.ConatinerPerfil>
            <Footer/>
       </>
    )
}


export default Perfil