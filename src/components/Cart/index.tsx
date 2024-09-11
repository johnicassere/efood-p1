import { useDispatch, useSelector } from 'react-redux'
import imagem from '../../assets/images/imagem.png'
import * as S from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'




const Cart = () => {

   const { isOpen } = useSelector((state: RootReducer) => state.cart)

   const dispatch = useDispatch()

const closeCart = () => {
    dispatch(close())
}



    return(
        <>
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.OverlayCart onClick={closeCart}/>
            <S.SideBar>
                <ul>
                    <S.ItemCart>
                        <img src={imagem} alt="" />
                        <div>
                            <h3>Nome restaurante</h3>
                            <span>R$69,90</span>
                        </div>
                        <button type='submit'/>
                    </S.ItemCart>
                    
                    <S.ItemCart>
                        <img src={imagem} alt="" />
                        <div>
                            <h3>Nome restaurante</h3>
                            <span>R$69,90</span>
                        </div>
                        <button type='submit'/>
                    </S.ItemCart>
                    
                </ul>
            <div>
                <S.Total>Valor Total</S.Total>
                <S.Total>R$49,90</S.Total>
            </div>
            <S.ButtonCart>continuar com a entrega</S.ButtonCart>
            </S.SideBar>
        </S.CartContainer>
        </>
    )
}

export default Cart