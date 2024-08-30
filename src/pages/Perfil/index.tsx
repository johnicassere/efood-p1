
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../../components/Produto"
import * as S from './styles'

const Perfil = () => {




    return(
     
        <>
        <Header/>
        <S.ConatinerPerfil>
        <Produto  />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        <Produto />
        </S.ConatinerPerfil>
        <Footer/>
        </>
    )
}


export default Perfil