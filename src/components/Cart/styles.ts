import { cores } from './../../styles';
import styled from "styled-components";


export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #000;
opacity:.8;
`

export const CartContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: flex-end;
z-index: 1;
`

export const SideCart = styled.aside`
background-color: ${cores.backGroundCard};;
max-width: 360px;
width: 100%;
z-index: 1;

div{
    background-color: ${cores.colorBackGround};
    width: 344px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 32px 8px 16px 8px;   
    
    img{
        margin: 8px 8px 16px 8px;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: 0 auto;
        align-items: flex-start;
       

        h3{
            margin-top: 8px;
            font-size: 18px;
            font-weight: 800;
            line-height: 20px;
        }

        span{
            margin-top: 16px;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            
        }

        .lixeira{
            width: 16px;
            height: 16px;
            margin-bottom: 8px;
            margin-right: 8px;
            position: fixed;
            right: 6px;
            bottom: 473px;
        
        }
        
    }

}

.total-compra{
       background-color: ${cores.backGroundCard};
       color: ${cores.textColorPerfil};
       display: flex;
       flex-direction: row;
       justify-content: space-between;
        font-size: 14px;
        font-weight: 700;
    }

   
    .div-btn{
        width: 100%;
        cursor: pointer;
        max-width: 344px;
        height: 24px;
        
        a {
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            color: ${cores.backGroundCard};
        }
    }
   
`