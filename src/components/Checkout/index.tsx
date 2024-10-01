import { usePurchaseMutation } from "../../services/api"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { open, close } from '../../store/reducers/cart'
import {useFormik} from 'formik'
import { precoTotal, parseToBrl } from '../../utils'
import { RootReducer } from "../../store"
import InputMask from "react-input-mask"
import Pedido from '../Pedido'
import * as Yup from 'yup'
import * as S from './styles'



type Props = {
    openCheckout?: boolean | false
    setOpenChekout?: (openCheckout: boolean) => void
    
}



const Checkout = ({openCheckout, setOpenChekout}: Props) => {
    
    const [ purchase, {isLoading, isError, data} ] = usePurchaseMutation()
    const { items } = useSelector((state: RootReducer) => state.cart)
    const [pagamento = false, setPagamento] = useState<boolean>()
    const [entrega = false, setEntrega] = useState<boolean>()
    const [pedido = false, setPedido] = useState<boolean>()
    const [order, setOrder] = useState('')
    const dispatch = useDispatch()

    


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

        // nameCard:'',
        // numeroCard:'',
        // cvv:'',
        // mesVencimento:'',
        // anoVencimento:''
    },
    
    validationSchema: Yup.object({
        receber: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        endereco: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        cidade: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        cepCep: Yup.string().min(9,'O campo deve ter pelo menos 9 caracteres').max(9,'O campo deve ter no maximo 9 caracteres').required('Campo obrigatório'),
        numeroEndereco: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        complemento: Yup.string(), 

        // nameCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'), 
        // numeroCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'), 
        // cvv: Yup.string().min(3,'O campo deve ter pelo menos 3 caracteres').max(3,'O campo deve ter no maximo 3 caracteres').required('Campo obrigatório'), 
        // mesVencimento: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').max(2,'O campo deve ter no maximo 2 caracteres').required('Campo obrigatório'), 
        // anoVencimento: Yup.string().min(4,'O campo deve ter pelo menos 4 caracteres').max(4,'O campo deve ter no maximo 4 caracteres').required('Campo obrigatório'),
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
            // payment:{
            //     card:{
            //         name: values.nameCard,
            //         number: values.numeroCard,
            //         code: Number(values.cvv),
            //         expires:{
            //             month: Number(values.mesVencimento),
            //             year: Number(values.anoVencimento)
            //         }
            //     }
            // },
            products: [
                {
                    id: 1,
                    preco: 100
                }
            ]
        })
        
    },
})


const formPagamento = useFormik({
    initialValues: {
        receber: '',
        endereco: '',
        cidade: '',
        cepCep: '',
        numeroEndereco: '',
        complemento: '',

        nameCard:'',
        numeroCard:'',
        cvv:'',
        mesVencimento:'',
        anoVencimento:''
    },
    validationSchema: Yup.object({
        nameCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'), 
        numeroCard: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').required('Campo obrigatório'), 
        cvv: Yup.string().min(3,'O campo deve ter pelo menos 3 caracteres').max(3,'O campo deve ter no maximo 3 caracteres').required('Campo obrigatório'), 
        mesVencimento: Yup.string().min(2,'O campo deve ter pelo menos 2 caracteres').max(2,'O campo deve ter no maximo 2 caracteres').required('Campo obrigatório'), 
        anoVencimento: Yup.string().min(4,'O campo deve ter pelo menos 4 caracteres').max(4,'O campo deve ter no maximo 4 caracteres').required('Campo obrigatório'),
    }),

    onSubmit: (values) => {
       // console.log(formEntrega,'submit pagamento');     
        purchase({
            delivery: {
                receiver: formEntrega.values.receber,
                address: {
                    description: formEntrega.values.endereco,
                    city: formEntrega.values.cidade,
                    zipCode: formEntrega.values.cepCep,
                    number: Number(formEntrega.values.numeroEndereco),
                    complement: formEntrega.values.complemento,
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


const openCart = () => {
    dispatch(open())
    setOpenChekout!(!openCheckout)   
}

const voltaEndereco = () => {
 setPagamento(false) 
}

const continuarPagamento = () => {
        setEntrega(false)
        setPagamento(true)
 }

const finalizarPagamento = () => {
    setEntrega(true)
    setPagamento(false)
    setPedido(true)
    dispatch(close())    
}

const getErrorMessage = (fieldName: string) => {
    const isTouched = fieldName in formEntrega.touched
    const isInvalid = fieldName in formEntrega.errors
    if(isTouched && isInvalid) return 'error'
    return ''
}

if(openCheckout){

   return (
        <> 
        <form onSubmit={formEntrega.handleSubmit}>
            <S.CheckoutContainer className={entrega ? 'is-open' : ''}>
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
                           // className={getErrorMessage('endereco') ? 'error' : ''}
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
                           // className={getErrorMessage('cidade') ? 'error' : ''}
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
                            <S.ButtonCheckout type="button" onClick={continuarPagamento}>Continuar com pagamento</S.ButtonCheckout>
                            <S.ButtonCheckout  onClick={openCart}>Voltar para o carrinho</S.ButtonCheckout>          
                        </div>
                </S.SideCheckout>
            </S.CheckoutContainer>
        
                {/* {checkIputEntrega! && ( */}
                <>
                <S.PagamentoContainer className={pagamento ? 'is-open' : ''}>
                        <S.OverlayCheckout />
                        <S.SidePagamento >
                        <h4>Pagamento - Valor a pagar R$ {parseToBrl(precoTotal(items))}</h4>
                    
                        <div className='nome-cartao'>
                                <label htmlFor="nameCard">Nome no cartão</label>
                                <input 
                                type="text" 
                                name='nameCard' 
                                id='nameCard'
                                value={formPagamento.values.nameCard}
                                onChange={formPagamento.handleChange}
                                onBlur={formPagamento.handleBlur}
                             // className={checkIputEntrega('nameCard') ? 'error' : ''}
                                />  
                            </div> 
                            <div className='campo-numero' >
                                <div className='numero-cartao'>
                                    <label htmlFor="numeroCard" >Número do Cartão</label>
                                    <InputMask 
                                    mask='9999.9999.9999.9999' 
                                    type="text" 
                                    name='numeroCard' 
                                    id='numeroCard'
                                    value={formPagamento.values.numeroCard}
                                    onChange={formPagamento.handleChange}
                                    onBlur={formPagamento.handleBlur}
                                // className={checkIputEntrega('numeroCard') ? 'error' : ''}
                                    />
                                </div>
                                <div className="cvv-cartao" >
                                    <label htmlFor="cvv">CVV</label>
                                    <InputMask 
                                    mask='999' 
                                    type="text" 
                                    name='cvv' 
                                    id='cvv'
                                    value={formPagamento.values.cvv}
                                    onChange={formPagamento.handleChange}
                                    onBlur={formPagamento.handleBlur}
                                //  className={checkIputEntrega('cvv') ? 'error' : ''}
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
                                    value={formPagamento.values.mesVencimento}
                                    onChange={formPagamento.handleChange}
                                    onBlur={formPagamento.handleBlur}
                                // className={checkIputEntrega('mesVencimento') ? 'error' : ''}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="anoVencimento">Ano de vencimento</label>
                                    <InputMask 
                                    mask='9999' 
                                    type="text" 
                                    name='anoVencimento' 
                                    id='anoVencimento'
                                    value={formPagamento.values.anoVencimento}
                                    onChange={formPagamento.handleChange}
                                    onBlur={formPagamento.handleBlur}
                                // className={checkIputEntrega('anoVencimento') ? 'error' : ''} 
                                    />
                                </div>
                            </div>
                            
                        <S.ButtonCheckout  onClick={finalizarPagamento}>Finalizar pagamento</S.ButtonCheckout>
                        <S.ButtonCheckout  onClick={voltaEndereco}>Voltar para a edição de endereço</S.ButtonCheckout>
                        </S.SidePagamento>
                </S.PagamentoContainer>
                
                /*</>{/* </>)} */}*/
            </form>
            
                {!order ? (<><h4>Carregando...</h4></>) : (
                    <Pedido 
                        setOpenPedido={setPedido}
                        openPedido={pedido}
                        order_id={!order ? '{Processando ordem}' : order}  
                    />
                    
        
                )}
        </>
)}

return <></>

} 


export default Checkout



