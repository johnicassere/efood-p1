import styled from "styled-components";
import { cores } from "../../styles";

export const ContainerArea = styled.body`
width: 1366px;
height: 1624px;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
z-index: 1;

`


export const ConatinerPerfil = styled.div`
max-width: 1024px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 32px;
position: relative;
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
    margin: 32px;
    object-fit: cover;
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
        line-height: 21px;
        margin-bottom: 16px;
        margin-top: 32px;
    }

    p{
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
    }

    button{
        width: 218px;
        height: 24px;
        border: none;
        margin-top: 16px;
        color: ${cores.textColorHome};
       background-color: ${cores.textColorPerfil};
       cursor: pointer;
    }
}

`