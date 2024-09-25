import styled from "styled-components";
import fundo from '../../assets/images/fundo.png'


export const HeroBar = styled.header`
background-image: url(${fundo});
width: 1366px;
height: 384px;
width: 100%;
margin-bottom: 80px;
display:flex;
flex-direction: column;
align-items: center;

@media(max-width:1366px){
        width: 1055px;
   }


img{
    width: 125px;
   margin-top: 40px;
   margin-bottom: 138px;
}


`
export const Title = styled.h1`
font-size: 36px;
font-weight: 900;
margin-bottom: 40px;
line-height: 42px;
text-align: center;
`