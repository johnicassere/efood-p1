import styled from "styled-components";
import { cores } from "../../styles";


export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.7;
`


export const ContainerProduto = styled.div`
max-width: 320px;
height: 338px;
background-color: ${cores.backGroundCard};
color: ${cores.textColorPerfil};
border: 4px solid ${cores.backGroundCard};

&.is-open{
    display: flex;
}

.div{
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

a{
    color: ${cores.backGroundCard};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    cursor: pointer;
}
`

