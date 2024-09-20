import styled from "styled-components";
import { cores } from "../../styles";



export const SideCheckout = styled.aside`
background-color: ${cores.backGroundCard};
//background-color: black;
max-width: 360px;
width: 100%;
top: 0;
left: 0;
z-index: 1;
padding: 32px 8px 0 8px;
color: ${cores.textColorPerfil};
font-size: 14px;
font-weight: 700;

h4{
   font-size: 16px;
   font-weight: 700;
   line-height: 18px;
   margin-bottom: 16px;
}
form{
    max-width: 344px;
}

label{
    margin-bottom: 8px;
}

input{
    border: none;
    padding: 8px;
    margin-bottom: 8px;
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
    
        input{
            margin-top: 8px;
            
        }

        .numero-cartao{
            input{
                max-width: 228px;
                width: 100%;
            }
        }

        .cvv-cartao{
            input{
                max-width: 87px;
                width: 100%;
            }
        }

   }
   
   .data-cartao{
    div{
        display: flex;
        flex-direction: column;
    }
    
   }

`