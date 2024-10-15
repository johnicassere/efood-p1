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
    
    const [ purchase, {data, isLoading, isSuccess } ] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [display, setDisplay] = useState<'entrega' | 'pagamento' | ''>('entrega')
    const [order, setOrder] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if(data){
           return setOrder(data.orderId)
        }   
    },[data])
  
const form = useFormik({
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
        cepCep: Yup.string().required('Campo obrigatório'),
        numeroEndereco: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        complemento: Yup.string(),

        // nameCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo Obrigatorio'), 
        // numeroCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo Obrigatorio'), 
        // cvv: Yup.string().required('Campo Obrigatorio'), 
        // mesVencimento: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').max(2,'O campo deve ter no maximo 2 caracteres').required('Campo Obrigatorio'), 
        // anoVencimento: Yup.string().required('Campo Obrigatorio'),
        
        
    }),
    onSubmit: (values) => {    
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
                    name:'',
                    number: '',
                    code:333,
                    expires:{
                        month:12,
                        year:24
                    },
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

const form2 = useFormik({
    initialValues:{
        receber: form.values.receber,
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
        nameCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo Obrigatorio'), 
        numeroCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo Obrigatorio'), 
        cvv: Yup.string().required('Campo Obrigatorio'), 
        mesVencimento: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').max(2,'O campo deve ter no maximo 2 caracteres').required('Campo Obrigatorio'), 
        anoVencimento: Yup.string().required('Campo Obrigatorio'),
    }),
    onSubmit: (values) => {    
        purchase({
            delivery: {
                receiver: form.values.receber,
                address: {
                    description: form.values.endereco,
                    city: form.values.cidade,
                    zipCode: form.values.cepCep,
                    number: Number(form.values.numeroEndereco),
                    complement: form.values.complemento,
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


const checkIputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid
    return hasError   
}


const openCart = () => {
    dispatch(open())
    setOpenChekout!(!openCheckout)   
}

const voltaEndereco = () => {
 setDisplay('entrega') 
}


const continuarPagamento = () => { 
    if(!checkIputHasError){
        setDisplay('pagamento')        
    }
    console.log('error ');
    
 }

const finalizarPagamento = () => {
    form.handleSubmit()   
}

const concluirPedido = () => {
    dispatch(removeAll())
    navigate('/')
    dispatch(close())
    setOpenChekout!(!openCheckout)
     window.location.reload()
}

console.log(form, 'form ');
console.log(form2, 'form2 ');


if(openCheckout){

   return (
        <> 
           {isSuccess && data ? (
            <>
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
                        <S.ButtonCheckout onClick={concluirPedido}>Concluir</S.ButtonCheckout>
                    </S.SidePedido>
            </S.PagamentoContainer> 
            </> 
            ) : (
             <>         
            <form onClick={form2.handleChange}>          
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
                            placeholder={`${!checkIputHasError('receber') ? 'Quem ira receber' : form.errors.receber}`}
                            value={form.values.receber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkIputHasError('receber') ? 'error' : ''}
                            />
                        </div>
                        <div className='label-container'>
                            <label htmlFor="endereco">Endereço</label>
                            <input 
                            id='endereco' 
                            name='endereco' 
                            type="text" 
                            value={form.values.endereco}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkIputHasError('endereco') ? 'error' : ''}
                            />
                        </div>
                        <div className='label-container'>
                            <label htmlFor="cidade">Cidade</label>
                            <input 
                            id='cidade' 
                            name='cidade' 
                            type="text" 
                            value={form.values.cidade}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkIputHasError('cidade') ? 'error' : ''}
                            />
                        </div>
                            <div className='cep'>
                            <div>
                                <label htmlFor="cepCep">CEP</label>
                                <input 
                                //mask="99999-999" 
                                id='cepCep' 
                                name='cepCep' 
                                type="text" 
                                value={form.values.cepCep}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkIputHasError('cepCep') ? 'error' : ''}
                                />
                            </div>
                            <div>
                                <label htmlFor="numeroEndereco">Número</label>
                                <input 
                                id='numeroEndereco' 
                                name='numeroEndereco' 
                                type="text" 
                                value={form.values.numeroEndereco}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkIputHasError('numeroEndereco') ? 'error' : ''}
                                />
                            </div>
                            </div>
                        <div className='label-container'>
                            <label htmlFor="complemento">Complemento (opcional)</label>
                            <input 
                            id='complemento' 
                            name='complemento' 
                            type="text" 
                            value={form.values.complemento}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            />
                        </div>
                    </div>
                        <div> 
                            <S.ButtonCheckout onClick={continuarPagamento}>Continuar com pagamento</S.ButtonCheckout>    
                            <S.ButtonCheckout onClick={openCart}>Voltar para o carrinho</S.ButtonCheckout>          
                        </div>
                </S.SideCheckout>
            </S.CheckoutContainer>
            </form>

            {display === 'pagamento' && 
            <>            
            <form onSubmit={form2.handleSubmit}>
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
                                value={form.values.nameCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkIputHasError('nameCard') ? 'error' : ''}
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
                                    value={form.values.numeroCard}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    //className={checkIputHasError('numeroCard') ? 'error' : ''}
                                    />
                                </div>
                                <div className="cvv-cartao" >
                                    <label htmlFor="cvv">CVV</label>
                                    <InputMask 
                                    mask='999' 
                                    type="text" 
                                    name='cvv' 
                                    id='cvv'
                                    value={form.values.cvv}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    //className={checkIputHasError('cvv') ? 'error' : ''}
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
                                    value={form.values.mesVencimento}
                                    onChange={form.handleChange}
                                    onBlur={form2.handleBlur}
                                    //className={checkIputHasError('mesVencimento') ? 'error' : ''}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                                    <InputMask 
                                    mask='99' 
                                    type="text" 
                                    name='anoVencimento' 
                                    id='anoVencimento'
                                    value={form.values.anoVencimento}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkIputHasError('anoVencimento') ? 'error' : ''} 
                                    />
                                </div>
                            </div>
                            
                        <S.ButtonCheckout type="submit" onClick={finalizarPagamento}>Finalizar pagamento</S.ButtonCheckout>
                        <S.ButtonCheckout  onClick={voltaEndereco}>Voltar para a edição de endereço</S.ButtonCheckout>
                        </S.SidePagamento>
                </S.PagamentoContainer>
            
            </form>            
            </>   
            }  
             </>
             )}
            
        </>
)}

return <></>

} 

export default Checkout



