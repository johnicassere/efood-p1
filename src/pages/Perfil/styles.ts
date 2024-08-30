import styled from "styled-components";
import { cores } from "../../styles";



export const ConatinerPerfil = styled.div`
max-width: 1024px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 32px;
position: relative;
`


export const divAction = styled.div`
max-width: 1024px;
height: 344px;
background-color: ${cores.textColorHome};
z-index: 2;
`
export const Action =styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 230%;
background-color: rgba(0,0,0,0.8);
z-index: 1;
`