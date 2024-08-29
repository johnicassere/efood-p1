import logo from '../../assets/images/logo.png'
import * as S from "./styles"

const Hero = () => {
    return(
        <>
        <S.HeroBar>
            <img src={logo} alt="Logo efood" />
            <S.Title>
                Viva experiências gastronômicas<br /> no conforto da sua casa
            </S.Title>
        </S.HeroBar>
        </>
    )
}


export default Hero