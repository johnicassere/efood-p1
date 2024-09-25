import styled from "styled-components";
import { cores } from "../../styles";

export const OverlayPagamento = styled.div`
position: absolute;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.8);
width: 100%;
height: 100%;
`

export const ContainerPagamente = styled.div`
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
`
export const SidePedido = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 360px;
width: 100%;
top: 0;
left: 0;
z-index: 2;
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

p{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
}

`
export const ButtonPedido = styled.button`
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