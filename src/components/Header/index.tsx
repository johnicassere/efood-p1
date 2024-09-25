import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import * as S from "./styles"
import { RootReducer } from '../../store'

type Props = {
    tipo?: string
    titulo?: string
    capa?: string
}

const Header = ({tipo, titulo, capa}: Props) => {
const dispatch = useDispatch()
const { items } = useSelector((state: RootReducer) => state.cart)

const openCart = () => {
    dispatch(open())
}



    return(
        <>
        <S.HeaderBar>
            <div className="container">
                <Link to="/"><S.Title>Restaurantes</S.Title></Link>
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                <S.Title>
                    <a onClick={openCart}><span>{items.length}{' '}</span>produto(s)</a>
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