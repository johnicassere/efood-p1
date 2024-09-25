import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram.png'
import face from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import * as S from './styles'


const Footer = () => {
    return (
        <S.ContainerFooter>
            <S.displayFooter>
                <a href="#"><img className='logo' src={logo} alt="logo efood" /></a>
                    <div>
                        <S.Links>
                            <li><a href="#"><img src={insta} alt="instagram" /></a></li>
                            <li><a href="#"><img src={face} alt="facebook" /></a></li>
                            <li><a href="#"><img src={twitter} alt="twitter" /></a></li>
                        </S.Links>
                    </div>
                   <div className='descricao-footer'>
                        <p>
                            A efood é uma plataforma para divulgação de estabelecimentos, a 
                            responsabilidade pela entrega, qualidade <br />
                            dos produtos é toda do estabelecimento contratado. 
                        </p>
                   </div>
            </S.displayFooter>
        </S.ContainerFooter>
    )
}


export default Footer