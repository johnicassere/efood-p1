import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remover } from '../../store/reducers/cart'
import { parseToBrl, precoTotal } from '../../utils'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Checkout from '../Checkout'
import * as S from './styles'





const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const [openEntrega, setOpenEntrega] = useState<boolean>(false)
    
    const navigate = useNavigate()
   const dispatch = useDispatch()
   


const closeCart = () => {
    dispatch(close())
}

const removerProduto = (id: number) => {
    dispatch(remover(id))
}

const entrega = () => { 
    setOpenEntrega(!openEntrega)
    dispatch(close())
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
            {items.length <= 0 ? (
                <S.ButtonCart onClick={closeCart}>
                    Voltar
                </S.ButtonCart>
            ) : (
                <S.ButtonCart onClick={entrega}>Continuar com a entrega</S.ButtonCart>)}
            </S.SideBar>
        </S.CartContainer>

        <Checkout 
        setOpenChekout={setOpenEntrega} 
        openCheckout={openEntrega}
        />
        </>
    )
}

export default Cart