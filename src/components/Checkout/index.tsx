import { usePurchaseMutation } from "../../services/api"
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import {useFormik} from 'formik'
import { open } from '../../store/reducers/cart'
import InputMask from "react-input-mask"
import Pedido from '../Pedido'
import * as Yup from 'yup'
import * as S from './styles'


type Props = {
    openCheckout?: boolean
    setOpenChekout?: (openCheckout: boolean) => void
}

const Checkout = ({openCheckout, setOpenChekout}: Props) => {
    
    const [ purchase, {isLoading, isError, data} ] = usePurchaseMutation()
    const [pagamento, setPagamento] = useState('')
    const [entrega, setEntrega] = useState('')
    const dispatch = useDispatch()

   const openCart = () => {
       dispatch(open())
       setOpenChekout!(!openCheckout!)   
}



const continuarPagamento = () => {
    setOpenChekout!(openCheckout!)
    setEntrega('')
    setPagamento('is-open') 
    }

const voltaEndereco = () => {
    setPagamento('') 
    setEntrega('')
}

const finalizarPagamento = () => {
    //setOpenChekout!(!openCheckout!)
    setEntrega('is-open')
    setPagamento('')
    console.log('finalizou');  
    
}


   
    
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
    onSubmit: (values) => {
        console.log(values);
        
    },
    validationSchema: Yup.object({
        receber: Yup.string().min(3,'O nome deve ter pelo menos 3 caracteres').required('Campo obrigatório'),
        endereco: Yup.string().required('Campo obrigatório'),
        cidade: Yup.string().min(2,'Cidade deve ter pelo menos 2 caracteres').required('Campo obrigatório'),
        cepCep: Yup.string().required('Campo obrigatório'),
        numeroEndereco: Yup.string().required('Campo obrigatório'),
        complemento: Yup.string(),
        nameCard: Yup.string().min(3,'O nome deve ter pelo menos 3 caracteres').required('Campo obrigatório'), 
        numeroCard: Yup.string().min(14,'O numero do cartão deve ter pelo menos 14 caracteres').required('Campo obrigatório'), 
        cvv: Yup.string().min(3,'O CVV deve ter pelo menos 3 caracteres').required('Campo obrigatório'), 
        mesVencimento: Yup.string().min(2,'O Mês deve ter pelo menos 2 caracteres').required('Campo obrigatório'), 
        anoVencimento: Yup.string().min(4,'O Ano deve ter pelo menos 4 caracteres').required('Campo obrigatório'), 
    })
})

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
// }

if(openCheckout){

   return (
        <> {/*is-open fecha*/}
        <form onSubmit={form.handleSubmit} >
            <S.CheckoutContainer className={`${entrega}`}>
            <S.OverlayCheckout onClick={openCart}/>
                <S.SideCheckout>
                    <h4>Entrega</h4>
                    <div className='form-checkout' >
                        <div className='label-container'>
                            <label htmlFor="receber">Quem ira receber</label>
                            <input 
                            id='receber' 
                            name="receber" 
                            type="text" 
                            value={form.values.receber}
                            onChange={form.handleChange} 
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
                                value={form.values.cepCep}
                                onChange={form.handleChange}
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
                            />
                        </div>
                    </div>
                        <div>
                        <S.ButtonCheckout onClick={continuarPagamento}>Continuar com pagamento</S.ButtonCheckout>
                        <S.ButtonCheckout onClick={openCart}>Voltar para o carrinho</S.ButtonCheckout>
                        </div>
                </S.SideCheckout>
            </S.CheckoutContainer>
        
        {/*is-open abre*/}
        <S.PagamentoContainer className={`${pagamento}`}>
            <S.OverlayCheckout />
            <S.SidePagamento >
            <h4>Pagamento - Valor a pagar R$ 190,90</h4>
        
            <div className='nome-cartao'>
                    <label htmlFor="nameCard">Nome no cartão</label>
                    <input 
                    type="text" 
                    name='nameCard' 
                    id='nameCard'
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    />  
                </div> 
                <div className='campo-numero' >
                    <div className='numero-cartao'>
                        <label htmlFor="numeroCard" >Número do Cartão</label>
                        <InputMask 
                        mask={'9999.9999.9999.9999'} 
                        type="text" 
                        name='numeroCard' 
                        id='numeroCard'
                        value={form.values.numeroCard}
                        onChange={form.handleChange}
                        />
                    </div>
                    <div className="cvv-cartao" >
                        <label htmlFor="cvv">CVV</label>
                        <InputMask 
                        mask={'999'} 
                        type="text" 
                        name='cvv' 
                        id='cvv'
                        value={form.values.cvv}
                        onChange={form.handleChange}
                        />
                    </div>
                    
                </div>
                <div className='data-cartao'>
                    <div >
                        <label htmlFor="mesVencimento">Mês de vencimento</label>
                        <InputMask 
                        mask={'99'} 
                        type="text" 
                        name='mesVencimento' 
                        id='mesVencimento'
                        value={form.values.mesVencimento}
                        onChange={form.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="anoVencimento">Ano de vencimento</label>
                        <InputMask 
                        mask={'9999'} 
                        type="text" 
                        name='anoVencimento' 
                        id='anoVencimento'
                        value={form.values.anoVencimento}
                        onChange={form.handleChange} 
                        />
                    </div>
                </div>
                
            <S.ButtonCheckout type='submit' onClick={finalizarPagamento}>Finalizar pagamento</S.ButtonCheckout>
            <S.ButtonCheckout type='button' onClick={voltaEndereco}>Voltar para a edição de endereço</S.ButtonCheckout>
            </S.SidePagamento>

        </S.PagamentoContainer>
        </form>
        <Pedido
        //teste={setPagamento(pagamento)!}
        />
        </>
  
   )
}
return <></>
}  


export default Checkout



