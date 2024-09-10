import { cores } from './../../styles';
import styled from "styled-components";


export const Overlay = styled.div`
//position:relative;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);

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
height: 1624px;
width: 100%;
z-index: 1;



.container-cart{
    background-color: ${cores.colorBackGround};
    width: 344px;
    height: 100px;
    display: flex;
    margin: 32px 8px 16px 8px;
    position: relative;
    
        
    img{
            margin: 8px 8px 12px 8px;
           width: 100%;
            max-width: 80px;
            height: 80px;
            object-fit: cover;
        }
        
div{

    h3{
        margin-top: 8px;
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 800;
        line-height: 20px;
        
    }

    span{
        font-size: 14px; 
        
    }


}
        
.lixeira{
    width: 16px;
    height: 16px;
    margin: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
}

}

.total-compra{
       background-color: ${cores.backGroundCard};
       color: ${cores.textColorPerfil};
       width: 344px;
       height: 16px;
       display: flex;
       justify-content: space-between;
       margin: 40px 8px 16px;
        font-size: 14px;
        font-weight: 700;
        
    }

   
    .div-btn{
        width: 100%;
        cursor: pointer;
        max-width: 344px;
        height: 24px;
        background-color: red;
        margin: 0 auto;
        text-align: center;
        background-color: ${cores.textColorPerfil};
        
        a {
            font-size: 14px;
            font-weight: 700;
            color: ${cores.backGroundCard};
        }
    }
   
`