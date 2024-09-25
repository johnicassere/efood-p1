import styled from "styled-components";
import { cores } from "../../styles";

export const OverlayCheckout = styled.div`
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.8);
width: 100%;
height: 100%;
`
export const CheckoutContainer = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: none;
justify-content: flex-end;
color: ${cores.textColotWhite};
z-index:1;

&.is-open{
    display: flex;
}

h4{
   font-size: 16px;
   font-weight: 700;
   line-height: 18px;
   margin-bottom: 16px;
}

label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 8px;        
    margin-bottom: 8px;
}

input{
    margin-bottom: 8px;
    padding: 8px;
    height: 32px;
    border: none;
    color: #4b4b4b ;
    font-weight: 700;
    background-color: ${cores.textColorPerfil};
    
}

`
export const SideCheckout = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 360px;
width: 100%;
z-index: 1;
padding: 32px 8px 0 8px;
color: ${cores.textColorPerfil};


.form-checkout{
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    
    .label-container{
        width: 344px;
        height: 56px;
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;

    }

    .cep{
        display: flex;
        width: 155px;
        height: 56px;
        font-size: 14px;
        font-weight: 700;
        line-height: 16px;
        margin-top: 8px;
        margin-bottom: 8px;
        
        div{
            margin-right: 34px;
            margin-top: 8px;
            margin-bottom: 8px;

    
            input{
                width: 155px;
                height: 32px;
                margin-top: 8px;
                padding: 8px;
                background-color: ${cores.textColorPerfil};
                color: #4b4b4b;
                font-weight: 700;
                border: none;
                
            }
        }
    }

}
`

export const ButtonCheckout = styled.button`
    margin-top: 8px;
    width: 344px;
    height: 24px;
    border: none;
    background-color: ${cores.textColorPerfil};
    color: ${cores.backGroundCard};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`

export const PagamentoContainer = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: none;
justify-content: flex-end;
color: ${cores.textColotWhite};
z-index:2;

&.is-open{
    display: flex;
}

h4{
   font-size: 16px;
   font-weight: 700;
   line-height: 18px;
   margin-bottom: 16px;
}

label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin-top: 8px;        
    margin-bottom: 8px;
}

input{
    margin-bottom: 8px;
    padding: 8px;
    height: 32px;
    border: none;
    color: #4b4b4b ;
    font-weight: 700;
    background-color: ${cores.textColorPerfil};
    
}


.nome-cartao {
    display: flex;
    flex-direction: column;
    
   }

   .campo-numero{
    display: flex;
    overflow: hidden;
    margin-bottom: 8px;
    
        .numero-cartao{
            input{
                max-width: 228px;
                width: 100%;
                margin-top: 8px;
            }
        }

        .cvv-cartao{
            max-width: 87px;
           
            input{
                margin-top: 8px;
                width: 100%;
            }
        }

   }

   .data-cartao{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    max-width: 345px;

    div{
        max-width: 155px;
        height: 56px;
        margin-bottom: 24px;

        input{
            margin-top: 8px;
        }
        
    }
   }
`

export const SidePagamento = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 360px;
width: 100%;
top: 0;
left: 0;
z-index: 1;
padding: 32px 8px 0 8px;
color: ${cores.textColorPerfil};
font-size: 14px;
font-weight: 700;

`