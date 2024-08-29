import styled from "styled-components";
import { cores } from "../../styles";



export const ContainerProduto = styled.div`
width: 320px;
height: 338px;
background-color: ${cores.backGroundCard};
color: ${cores.textColorPerfil};
border: 4px solid ${cores.backGroundCard};


img{
    width: 100%;
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
    background-color: ${cores.colorBackGround};
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


