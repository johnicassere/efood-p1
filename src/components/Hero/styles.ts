import styled from "styled-components";
import fundo from '../../assets/images/fundo.png'


export const HeroBar = styled.header`
background-image: url(${fundo});
height: 384px;
margin-bottom: 80px;
display:flex;
flex-direction: column;
align-items: center;


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