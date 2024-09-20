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

`
export const SideCheckout = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 360px;
width: 100%;
z-index: 1;
padding: 32px 8px 0 8px;
color: ${cores.textColorPerfil};

h4{
   font-size: 16px;
   font-weight: 700;
   line-height: 18px;
   margin-bottom: 16px;
}

form{
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    
    .label-container{
        width: 344px;
        height: 56px;
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;

        label{
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            margin-top: 8px;
            margin-bottom: 8px;
        }
        input{
            height: 32px;
            padding: 8px;
            font-size: 14px;
            font-weight: 700;
            background-color: ${cores.textColorPerfil};
            color: #4b4b4b;
            border: none;

        }
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