import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remover } from '../../store/reducers/cart'
import { parseToBrl, precoTotal } from '../../utils'
import * as S from './styles'




const Cart = () => {

   const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

   const dispatch = useDispatch()

const closeCart = () => {
    dispatch(close())
}

const removerProduto = (id: number) => {
    console.log(id, 'cart id');
    
    dispatch(remover(id))
}



    return(
        <>
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.OverlayCart onClick={closeCart}/>
            <S.SideBar>
                {items.length <= 0 ? (<h4>O carrinho está vazio</h4>
                ) : (
                <ul>
                    {items.map((item, index) => (
                        <S.ItemCart key={index}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <span>R${' '}{item.preco}</span>
                        </div>
                        <button onClick={() => removerProduto(item.id!)} type='submit'/>
                    </S.ItemCart>
                    ))}     
                </ul>
                )}
            <div>
                <S.Total>Valor Total</S.Total>
                <S.Total>{parseToBrl(precoTotal(items))}</S.Total>
            </div>
            <S.ButtonCart>continuar com a entrega</S.ButtonCart>
            </S.SideBar>
        </S.CartContainer>
        </>
    )
}

export default Cart