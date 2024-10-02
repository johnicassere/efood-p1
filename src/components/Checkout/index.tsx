import { usePurchaseMutation } from "../../services/api"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { open, close, removeAll } from '../../store/reducers/cart'
import {useFormik} from 'formik'
import { precoTotal, parseToBrl } from '../../utils'
import { RootReducer } from "../../store"
import InputMask from "react-input-mask"
import * as Yup from 'yup'
import * as S from './styles'
import { useNavigate } from "react-router-dom"



type Props = {
    openCheckout?: boolean | false
    setOpenChekout?: (openCheckout: boolean) => void
    
}

const Checkout = ({openCheckout, setOpenChekout}: Props) => {
    
    const [ purchase, {isLoading, isError, data} ] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [display, setDisplay] = useState<'entrega' | 'pagamento' | 'concluir'>('entrega')
    const [order, setOrder] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(data){
           return setOrder(data.orderId)
        }   
    },[data])
  
const formEntrega = useFormik({
    initialValues:{
        receber: '',
        endereco: '',
        cidade:'',
        cepCep: '',
        numeroEndereco: '',
        complemento:'',

        nameCard:'',
        numeroCard:'',
        cvv:'',
        mesVencimento:'',
        anoVencimento:''
    },
    
    validationSchema: Yup.object({
        receber: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        endereco: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        cidade: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        cepCep: Yup.string().min(9,'O campo deve ter pelo menos 9 caracteres').max(9,'O campo deve ter no maximo 9 caracteres').required('Campo obrigatório'),
        numeroEndereco: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        complemento: Yup.string(), 

        nameCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('obrigatorio'), 
        numeroCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('obrigatorio'), 
        cvv: Yup.string().min(3,'O campo deve ter pelo menos 3 caracteres').max(3,'O campo deve ter no maximo 3 caracteres').required('obrigatorio'), 
        mesVencimento: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').max(2,'O campo deve ter no maximo 2 caracteres').required('obrigatorio'), 
        anoVencimento: Yup.string().min(4,'O campo deve ter pelo menos 4 caracteres').max(4,'O campo deve ter no maximo 4 caracteres').required('obrigatorio'),
    }),
    onSubmit: (values) => {
       // console.log(values);     
        purchase({
            delivery: {
                receiver: values.receber,
                address: {
                    description: values.endereco,
                    city: values.cidade,
                    zipCode: values.cepCep,
                    number: Number(values.numeroEndereco),
                    complement: values.complemento,
                }
            },
            payment:{
                card:{
                    name: values.nameCard,
                    number: values.numeroCard,
                    code: Number(values.cvv),
                    expires:{
                        month: Number(values.mesVencimento),
                        year: Number(values.anoVencimento)
                    }
                }
            },
            products: [
                {
                    id: 1,
                    preco: 100
                }
            ]
        })
        
    },
})


const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in formEntrega.touched
    const isInvalid = fieldName in formEntrega.errors
    if(isTouched && isInvalid){
       return 'error' 
    } 
    return  ''   
}


const openCart = () => {
    dispatch(open())
    setOpenChekout!(!openCheckout)   
}

const voltaEndereco = () => {
 setDisplay('entrega') 
}


const continuarPagamento = () => {
    setDisplay('pagamento')    
 }

const finalizarPagamento = () => {
    setDisplay('concluir')
    dispatch(close())    
}

const concluirPedido = () => {
    dispatch(removeAll())
    navigate('/')
    dispatch(close())
     window.location.reload()
}


if(openCheckout){

   return (
        <> 
        <form onSubmit={formEntrega.handleSubmit}>
            <S.CheckoutContainer>
                <S.OverlayCheckout onClick={openCart}/> 
                <S.SideCheckout >
                    <h4>Entrega</h4>
                    <div className='form-checkout' >
                        <div className='label-container'>
                            <label htmlFor="receber">Quem ira receber</label>
                            <input 
                            id='receber' 
                            name="receber" 
                            type="text" 
                            value={formEntrega.values.receber}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={getErrorMessage('receber') ? 'error' : ''}
                            />
                        </div>
                        <div className='label-container'>
                            <label htmlFor="endereco">Endereço</label>
                            <input 
                            id='endereco' 
                            name='endereco' 
                            type="text" 
                            value={formEntrega.values.endereco}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={getErrorMessage('endereco') ? 'error' : ''}
                            />
                        </div>
                        <div className='label-container'>
                            <label htmlFor="cidade">Cidade</label>
                            <input 
                            id='cidade' 
                            name='cidade' 
                            type="text" 
                            value={formEntrega.values.cidade}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            className={getErrorMessage('cidade') ? 'error' : ''}
                            />
                        </div>
                            <div className='cep'>
                            <div>
                                <label htmlFor="cepCep">CEP</label>
                                <InputMask 
                                mask="99999-999" 
                                id='cepCep' 
                                name='cepCep' 
                                type="text" 
                                value={formEntrega.values.cepCep}
                                onChange={formEntrega.handleChange}
                                onBlur={formEntrega.handleBlur}
                               // className={getErrorMessage('cepCep') ? 'error' : ''}
                                />
                            </div>
                            <div>
                                <label htmlFor="numeroEndereco">Número</label>
                                <input 
                                id='numeroEndereco' 
                                name='numeroEndereco' 
                                type="text" 
                                value={formEntrega.values.numeroEndereco}
                                onChange={formEntrega.handleChange}
                                onBlur={formEntrega.handleBlur}
                               // className={getErrorMessage('numeroEndereco') ? 'error' : ''}
                                />
                            </div>
                            </div>
                        <div className='label-container'>
                            <label htmlFor="complemento">Complemento (opcional)</label>
                            <input 
                            id='complemento' 
                            name='complemento' 
                            type="text" 
                            value={formEntrega.values.complemento}
                            onChange={formEntrega.handleChange}
                            onBlur={formEntrega.handleBlur}
                            />
                        </div>
                    </div>
                        <div>
                            <S.ButtonCheckout onClick={continuarPagamento}>Continuar com pagamento</S.ButtonCheckout>
                            <S.ButtonCheckout onClick={openCart}>Voltar para o carrinho</S.ButtonCheckout>          
                        </div>
                </S.SideCheckout>
            </S.CheckoutContainer>

            {display === 'pagamento' && 
            <>
                <S.PagamentoContainer>
                        <S.OverlayCheckout />
                        <S.SidePagamento>
                        <h4>Pagamento - Valor a pagar R$ {parseToBrl(precoTotal(items))}</h4>
                    
                        <div className='nome-cartao'>
                                <label htmlFor="nameCard">Nome no cartão</label>
                                <input 
                                type="text" 
                                name='nameCard' 
                                id='nameCard'
                                value={formEntrega.values.nameCard}
                                onChange={formEntrega.handleChange}
                                onBlur={formEntrega.handleBlur}
                                 className={getErrorMessage('nameCard') ? 'error' : ''}
                                />  
                            </div> 
                            <div className='campo-numero'>
                                <div className='numero-cartao'>
                                    <label htmlFor="numeroCard" >Número do Cartão</label>
                                    <InputMask 
                                    mask='9999.9999.9999.9999' 
                                    type="text" 
                                    name='numeroCard' 
                                    id='numeroCard'
                                    value={formEntrega.values.numeroCard}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                // className={getErrorMessage('numeroCard') ? 'error' : ''}
                                    />
                                </div>
                                <div className="cvv-cartao" >
                                    <label htmlFor="cvv">CVV</label>
                                    <InputMask 
                                    mask='999' 
                                    type="text" 
                                    name='cvv' 
                                    id='cvv'
                                    value={formEntrega.values.cvv}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                //  className={getErrorMessage('cvv') ? 'error' : ''}
                                    />
                                </div>
                                
                            </div>
                            <div className='data-cartao'>
                                <div >
                                    <label htmlFor="mesVencimento">Mês de vencimento</label>
                                    <InputMask 
                                    mask='99' 
                                    type="text" 
                                    name='mesVencimento' 
                                    id='mesVencimento'
                                    value={formEntrega.values.mesVencimento}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                // className={getErrorMessage('mesVencimento') ? 'error' : ''}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                                    <InputMask 
                                    mask='9999' 
                                    type="text" 
                                    name='anoVencimento' 
                                    id='anoVencimento'
                                    value={formEntrega.values.anoVencimento}
                                    onChange={formEntrega.handleChange}
                                    onBlur={formEntrega.handleBlur}
                                // className={getErrorMessage('anoVencimento') ? 'error' : ''} 
                                    />
                                </div>
                            </div>
                            
                        <S.ButtonCheckout type="submit"  onClick={finalizarPagamento}>Finalizar pagamento</S.ButtonCheckout>
                        <S.ButtonCheckout  onClick={voltaEndereco}>Voltar para a edição de endereço</S.ButtonCheckout>
                        </S.SidePagamento>
                </S.PagamentoContainer>
            </>}
            </form>

            {display === 'concluir' && <>
            <S.PagamentoContainer>
                <S.OverlayCheckout />
                <S.SidePedido>
                     <h4>Pedido realizado - {`{${order}}`}</h4>
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
                     <S.ButtonPedido onClick={concluirPedido}>Concluir</S.ButtonPedido>
                 </S.SidePedido>
            </S.PagamentoContainer> 
            </>}
            
        </>
)}

return <></>

} 

export default Checkout



