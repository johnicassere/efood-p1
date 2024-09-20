import { useState } from 'react'
import { SideCheckout } from './styles'
import { useNavigate } from 'react-router-dom'
import * as S from '../Checkout/styles'


type Props = {
    openPagamento?: boolean
    setOpenPagamento?: (openPagamento: boolean) => void
}


const CheckoutPagamento = ({ openPagamento, setOpenPagamento }:Props) => {
    const [displayOpen, setdisplayOpen] = useState(false)
    const navigate = useNavigate()
    

    const abrirFechar = () => {
        setdisplayOpen(!displayOpen)
    }

    const naveHome = () => {
        setOpenPagamento!(!openPagamento!)
        navigate('/')
    }

console.log(openPagamento,'pagamento');

if(openPagamento){
        return(
            <S.CheckoutContainer className={openPagamento ? 'is-open' : ''}>
                <S.OverlayCheckout />
                {!displayOpen ? (  
                <SideCheckout >
                <h4>Pagamento - Valor a pagar R$ 190,90</h4>
                <form action="">     
                   <div className='nome-cartao'>
                        <label htmlFor="">Nome no cartão</label>
                        <input type="text" placeholder='João Paulo de Souza' required />  
                    </div> 
                    <div className='campo-numero' >
                        <div className='numero-cartao'>
                            <label htmlFor="" >Número do Cartão</label>
                            <input type="text" required />
                        </div>
                        <div className="cvv-cartao" style={{maxWidth:'87px'}}>
                            <label htmlFor="">CVV</label>
                            <input type="text" required />
                        </div>
                        
                    </div>
                    <div className='data-cartao'>
                        <div>
                            <label htmlFor="">Mês de vencimento</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label htmlFor="">Ano de vencimento</label>
                            <input type="text" required />
                        </div>
                    </div>
                </form>
                <S.ButtonCheckout type='submit' onClick={abrirFechar}>Finalizar pagamento</S.ButtonCheckout>
                <S.ButtonCheckout>Voltar para a edição de endereço</S.ButtonCheckout>
                </SideCheckout>
                ) : ( 
                <S.SideCheckout >
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
                    <S.ButtonCheckout onClick={naveHome}>Concluir</S.ButtonCheckout>
                </S.SideCheckout>
                )}
            </S.CheckoutContainer>
    )
}
return <></>
}

export default CheckoutPagamento