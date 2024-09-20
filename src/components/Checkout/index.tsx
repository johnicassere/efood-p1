import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { usePurchaseMutation } from "../../services/api"
import * as S from './styles'
import { useState } from 'react'
import CheckoutPagamento from '../CheckoutPagamento'


type Props = {
    openCheckout?: boolean
    setOpenChekout?: (openCheckout: boolean) => void
}

const Checkout = ({openCheckout, setOpenChekout}: Props) => {
    
    const { id } = useParams()
    const navigate = useNavigate()

    const dispatch = useDispatch()

   const [ purchase, {isLoading, isError, data} ] = usePurchaseMutation()
   const [pagamento, setPagamento] = useState<boolean>(false)

   
   const openCart = () => {
       dispatch(open())
       setOpenChekout!(!openCheckout!)
}



const funcPagamento = () => {
    setPagamento!(!pagamento!)
    setOpenChekout!(openCheckout!)
}

   if(openCheckout){

   return (
    <>
    <S.CheckoutContainer className={openCheckout ? 'is-open' : ''}>
    <S.OverlayCheckout onClick={openCart}/>
        <S.SideCheckout>
            <h4>Entrega</h4>
            <form action="">
                <div className='label-container'>
                    <label htmlFor="receber">Quem ira receber</label>
                    <input id='receber' type="text" placeholder='João Paulo de Souza' required />
                </div>
                <div className='label-container'>
                    <label htmlFor="endereco">Endereço</label>
                    <input id='endereco' type="text" required/>
                </div>
                <div className='label-container'>
                    <label htmlFor="cidade">Cidade</label>
                    <input id='cidade' type="text" required/>
                </div>
                    <div className='cep'>
                    <div>
                        <label htmlFor="cep-cep">CEP</label>
                        <input id='cep-cep' type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="numero-endereco">Número</label>
                        <input id='numero-endereco' type="text" required/>
                    </div>
                    </div>
                <div className='label-container'>
                    <label htmlFor="complemento">Complemento (opcional)</label>
                    <input id='complemento' type="text" />
                </div>
            </form>
                <div>
                <S.ButtonCheckout type='submit'  onClick={funcPagamento}>Continuar com pagamento</S.ButtonCheckout>
                <S.ButtonCheckout onClick={openCart}>Voltar para o carrinho</S.ButtonCheckout>
                </div>
        </S.SideCheckout>
    </S.CheckoutContainer>

        <CheckoutPagamento
        setOpenPagamento={setPagamento}
        openPagamento={pagamento!}
        />
    </>
)
}
return <></>
}

export default Checkout

