import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import * as S from "./styles"

type Props = {
    tipo?: string
    titulo?: string
    capa?: string
}

const Header = ({tipo, titulo, capa}: Props) => {

    return(
        <>
        <S.HeaderBar>
            <div className="container">
                <Link to="/"><S.Title>Restaurantes</S.Title></Link>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                <S.Title>
                    <Link to="/"><span>2{' '}</span>produtos(s)</Link>
                </S.Title>
            </div>
        </S.HeaderBar>
        <S.HeaderOpacit>
                <S.HeaderImg capa={capa}>
                                <S.ContainerTipo>
                                    <div>
                                    <S.SubTitle className='header-tipo' weight='lighter'>{tipo}</S.SubTitle>
                                    <S.SubTitle className='header-titulo'>{titulo}</S.SubTitle>
                                    </div>
                                </S.ContainerTipo>
                </S.HeaderImg>
        </S.HeaderOpacit>
        </>
    )
}


export default Header