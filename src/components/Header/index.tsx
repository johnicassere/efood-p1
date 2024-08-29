import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import * as S from "./styles"

const Header = () => {
    return(
        <>
        <S.HeaderBar>
            <div className="container">
                <Link to="/"><S.Title>Restaurante</S.Title></Link>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                <S.Title>
                    <Link to="/"><span>2{' '}</span>produtos(s)</Link>
                </S.Title>
            </div>
        </S.HeaderBar>
        <S.HeaderOpacit className='div-opatcit'>
        <S.HeaderImg>
                <div>
                <S.SubTitle weight='lighter'>Italiana</S.SubTitle>
                </div>
                <div>
                <S.SubTitle>La Dolce Vita trattoria</S.SubTitle>
                </div>
        </S.HeaderImg>
        </S.HeaderOpacit>
        </>
    )
}


export default Header