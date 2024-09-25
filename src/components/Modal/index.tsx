import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { open, add } from '../../store/reducers/cart'

import * as S from './styles'


type Props = {
    cardapio: Cardapio
    isOpen?: boolean
    setOpenModal?: (isOpen: boolean) => void
}


const Modal = ({ isOpen, cardapio, setOpenModal }: Props) => {
  
    const dispatch = useDispatch()
    const paramsId = cardapio.id?.toString()  

    const { nome, foto, descricao, porcao, preco } = cardapio
   
    const closeModal = (id?: string ) => {
        setOpenModal!(!isOpen)
         
    }

    const openCart = () => {
        dispatch(open())
        dispatch(add(cardapio!))
        closeModal()   
    }


    if(isOpen){
       
        return (
            <S.ModalConatiner>
            <S.OverlayModal onClick={() => setOpenModal!(!isOpen)}/>
                <S.SideModal>
                    <ul>
                        <S.ItemModal>
                            <img src={foto} alt="" />
                            <div>
                                <h3>{nome}</h3>
                                <button className="button-close" onClick={() => setOpenModal!(!isOpen)}/>
                                <div className='descricao-modal'>
                                <p>
                                {descricao?.padEnd(303,' vazio')}
                                {descricao?.padEnd(303, ' vazio')}
                                </p>
                                <br />
                                <p>{porcao}</p>
                                <button onClick={openCart}>Adicionar ao carrinho - R${preco}</button>
                                </div>
                            </div>
                        </S.ItemModal>
                    </ul>
                </S.SideModal>
            </S.ModalConatiner>
    )
    }else{
       return  <></>
    }
    
    
}


export default Modal
