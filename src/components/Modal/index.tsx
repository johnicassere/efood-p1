import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useNavigate } from 'react-router-dom'
import { open, add } from '../../store/reducers/cart'

import * as S from './styles'


interface Props extends Cardapio {
    
    isOpen?: boolean
    setOpenModal?: (isOpen: boolean) => void
}



const Modal = ({ isOpen, id, nome, foto, descricao, porcao, preco , setOpenModal }: Props) => {
   
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const closeModal = (id: string ) => {
        setOpenModal!(!isOpen)
        navigate(`/perfil/${id}`)
         
    }

    const openCart = () => {
        dispatch(open())
        closeModal(`${id}`)  
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
