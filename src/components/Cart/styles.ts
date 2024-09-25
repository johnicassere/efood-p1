import styled from "styled-components";
import { cores } from "../../styles";
import lixeira from '../../assets/images/lixeiraCart.png'


export const OverlayCart = styled.div`
position: absolute;
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
display: none;
justify-content: flex-end;
color: ${cores.textColotWhite};
z-index: 1;

&.is-open{
    display: flex;
}
`

export const SideBar = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 360px;
width: 100%;
z-index: 1;
padding: 32px 8px 0 8px;

div{
    display: flex;
    justify-content: space-between;
}


`

export const Total = styled.p`
font-size: 14px;
font-weight: 700;
line-height: 16px;
margin-top: 40px;
`

export const ButtonCart = styled.button`
    margin-top: 16px;
    width: 344px;
    height: 24px;
    border: none;
    background-color: ${cores.textColorPerfil};
    color: ${cores.backGroundCard};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    `


export const ItemCart = styled.li`
display: flex;
width: 344px;
height: 100px;
margin-top: 16px;
margin-bottom: 16px;
background-color: ${cores.textColorPerfil};
position: relative;

img{
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
}

div{
    display: flex;
    flex-direction: column;
    color: ${cores.backGroundCard};
    position: relative;
    h3{
        margin-top: 8px;
        font-size: 18px;
        font-weight: 900;
    }

    span{
        margin-top: 16px;
        font-size: 14px;
        margin-bottom: 33px;
    }

}

button{
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
}

`