import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useEffect, useState } from 'react'
import { Cardapio } from '../../types'
import { useNavigate, useParams } from 'react-router-dom'
import { open } from '../../store/reducers/cart'

import axios from 'axios'
import * as S from './styles'


type Props = {
    id?: number
    isOpen?: string
    foto?: string
}



const Modal = () => {
    const {id, produto } = useParams()
    
    let idItem = parseInt(produto!)
    
    
     const [cardapio, setCardapio] = useState<Cardapio>()
     useEffect(() => {
        axios.get(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => {
            let index = res.data.cardapio.findIndex((elemento: any) => elemento.id === idItem)
            setCardapio(res.data.cardapio[index])
        })
        .catch(error => console.log(error))
        
    },[])

    
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const closeModal = () => {
        navigate(`/perfil/${id}`)
         
    }

    const openCart = () => {
        dispatch(open())
        closeModal() 
    }
    
    return (
            <S.ModalConatiner >
            <S.OverlayModal onClick={closeModal}/>
                <S.SideModal>
                    <ul>
                        <S.ItemModal>
                            <img src={cardapio?.foto} alt="" />
                            <div>
                                <h3>{cardapio?.nome}</h3>
                                <button className="button-close" onClick={closeModal}/>
                                <div className='descricao-modal'>
                                <p>
                                {cardapio?.descricao.padEnd(303,' vazio')}
                                {cardapio?.descricao.padEnd(303, ' vazio')}
                                </p>
                                <br />
                                <p>{cardapio?.porcao}</p>
                                <button onClick={openCart}>Adicionar ao carrinho - R${cardapio?.preco}</button>
                                </div>
                            </div>
                        </S.ItemModal>
                    </ul>
                </S.SideModal>
            </S.ModalConatiner>
    )
}


export default Modal
