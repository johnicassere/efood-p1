import styled from "styled-components";
import fundo from '../../assets/images/fundo.png'
import { cores } from "../../styles";


type  PropsWeight = {
    weight?: string
}

export const HeaderBar = styled.header`
background-image: url(${fundo});
padding: 40px;

@media(max-width:1025px){
        width: 1055px;
   }

a{
    color: ${cores.backGroundCard};
    cursor: pointer;
}
img{
    width: 125px;

    @media(max-width:376px){
      display: none;
}
}

.container{
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media(max-width:769px){
       justify-content: space-evenly;
}
    
}

`
export const Title = styled.h1`
font-size: 18px;
font-weight: 900;
line-height: 22px;
margin-left: 24px;
`

export const HeaderOpacit = styled.div`
background: rgba(0, 0, 0, 0.5);
width: 100%;
margin-bottom: 56px;
`



type Props = {
    capa?: string
}

export const HeaderImg = styled.div<Props>`
    background-image: url(${(props) => props.capa});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
    height: 280px;

    @media(max-width:1025px){
        width: 1055px;
   }

    
`


export const ContainerTipo = styled.div`
width: 1024px;
height: 280px;
width: 100%;
position: absolute;
background: rgba(0, 0, 0, 0.5);



div{
    width: 1024px;
    height: 280px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: space-between;

    @media(max-width:769px){
       justify-content: space-around;
   
    }

    .header-tipo{
        margin-top: 25px;
    }
    .header-titulo{
        margin-bottom: 32px;
    }
    
}



`

export const SubTitle = styled.h2<PropsWeight>`
    font-size: 32px;
    color: ${cores.textColotWhite};
    font-weight: ${(props) => props.weight === 'lighter' ? '100' : '900' }; 

    @media(max-width:1025px){
       margin-left: 150px;
   }

`






