import styled from "styled-components";
import fundo from '../../assets/images/fundo.png'


export const HeroBar = styled.header`
background-image: url(${fundo});
height: 384px;
width: 100%;
margin-bottom: 80px;
display:flex;
flex-direction: column;
align-items: center;

@media(max-width:768px){
    width: 768px;
    margin-bottom: 30px;
    height: 320px;
}

@media(max-width:426px){
    align-items: center;
  
}



img{
    width: 125px;
   margin-top: 40px;
   margin-bottom: 138px;

   @media(max-width:768px){
    margin-top: 20px;
    margin-bottom: 80px;
    border-radius: 4px;
}
}

`
export const Title = styled.h1`
font-size: 36px;
font-weight: 900;
margin-bottom: 40px;
line-height: 42px;
text-align: center;

@media(max-width:768px){
   font-size: 26px;
   margin-bottom: 20px;
}

`