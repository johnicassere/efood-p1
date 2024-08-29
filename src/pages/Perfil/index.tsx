
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Produto from "../Produto"
import * as S from './styles'

const Perfil = () => {
    return(
        <S.Modal className="">
        <Header/>
        <S.ConatinerPerfil>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        <Produto/>
        </S.ConatinerPerfil>
        <Footer/>
        </S.Modal>
    )
}


export default Perfil