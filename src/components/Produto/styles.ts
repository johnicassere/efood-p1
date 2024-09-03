import styled from "styled-components";
import { cores } from "../../styles";




export const ContainerProduto = styled.div`
max-width: 320px;
height: 338px;
background-color: ${cores.backGroundCard};
color: ${cores.textColorPerfil};
border: 4px solid ${cores.backGroundCard};
z-index: 0;


div{
    max-width: 304px;
    height: 167px;
    margin: 8px;
}

img{
    object-fit: cover;
    width: 100%;
    max-height: 167px;
}

h2{
    font-size: 16px;
    font-weight: 900;
    line-height: 18px;
    margin-left: 8px;
    margin-top: 8px;
}

p{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 8px;
    
}

.adicionar{
    background-color: ${cores.textColorPerfil};
    width: 304px;
    height: 24px;
    text-align: center;
    margin: 0 auto;
    
}

button{
    color: ${cores.backGroundCard};
    background-color: ${cores.textColorPerfil};
    border: none;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    cursor: pointer;
}
`

export const ConatinerOver = styled.div`
margin-top: 490px;
max-width: 1024px;
width: 100%;
max-height: 344px;
background-color: ${cores.textColorHome};
display: flex;
position: relative;

img{
    max-width: 280px;
    max-height: 280px;
    margin-top: 32px;
    margin-bottom: 32px;
    margin-left: 32px;
    margin-right: 32px;
    object-fit: cover;
    margin-left: 24px;
}

.close-icon {
    top: 0;
    right: 0;
    width: 16px;
    height: 16px;
    margin: 8px;
    position: absolute;
    cursor: pointer;
   
}

.section-compra{
    width: 656px;
    display: flex;
    flex-direction: column;
    color: ${cores.textColotWhite};

    h3{
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
        margin-top: 32px;
    }

    .container-descricao{
        max-width: 656px;
        height: 176;
        margin-right: 32px;
        margin-bottom: 16px;
        p{
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;   
        }
    }

    .div-link{
        max-width: 218px;
        height: 24px;
        margin-top: 16px;
        align-items: center;
        background-color: ${cores.textColorPerfil};
        font-size: 14px;
        font-weight: 700;
        border: none;
        cursor: pointer;
    }
    
    .link-cart{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 24px;
        color: ${cores.textColorHome};
    }
}

`


