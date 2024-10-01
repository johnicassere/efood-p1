import { useNavigate } from 'react-router-dom'
import { close,removeAll } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import * as S from './styles'


type Props = {
    openPedido?: boolean
    setOpenPedido?: (openPedido: boolean) => void
    order_id?: string
    type?: 'button' | 'submit'
}

const Pedido = ({ openPedido = false, setOpenPedido, order_id }:Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const concluirPedido = () => {
        setOpenPedido!(!openPedido)
        dispatch(removeAll())
        navigate('/')
        dispatch(close())
         window.location.reload()
    }

        return(
            <S.ContainerPagamente className={openPedido ? 'is-open' : ''}>
                <S.OverlayPagamento />
                 <S.SidePedido>
                     <h4>Pedido realizado - {`{${order_id}}`}</h4>
                     <p style={{fontSize:'14px', lineHeight: '22px', fontWeight:'400', marginBottom: '24px'}}>
                     Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, 
                     será entregue no endereço fornecido. 
                     <br/>
                     <br/>
                     Gostaríamos de ressaltar que nossos entregadores não estão 
                     autorizados a realizar cobranças extras.
                     <br/> 
                     <br/> 
                     Lembre-se da importância de higienizar as mãos após o recebimento do pedido, 
                     garantindo assim sua segurança e bem-estar durante a refeição.
                     <br/>
                     <br/>
                     Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. 
                     Bom apetite!
                     </p>
                     <S.ButtonPedido type='submit' onClick={concluirPedido}>Concluir</S.ButtonPedido>
                 </S.SidePedido>
            </S.ContainerPagamente>
    )

}

export default Pedido