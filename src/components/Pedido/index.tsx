import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { close } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'
import * as S from './styles'


type Props = {
    openPedido?: boolean
    setOpenPedido?: (openPedido: boolean) => void
    teste?: string
}

const Pedido = ({ openPedido, setOpenPedido }:Props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const concluirPedido = () => {
        dispatch(close())
       setOpenPedido!(!openPedido)
        navigate('/')
    }

        return(
            <S.ContainerPagamente >
                <S.OverlayPagamento />
                 <S.SidePedido style={{display:'none'}}>
                     <h4>Pedido realizado - {`ORDER_ID`}</h4>
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