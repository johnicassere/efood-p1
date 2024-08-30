import styled from "styled-components";
import fundo from '../../assets/images/fundo.png'
import image from '../../assets/images/image1.png'
import { cores } from "../../styles";


export const HeaderBar = styled.header`
background-image: url(${fundo});
padding: 40px;

a{
    color: ${cores.backGroundCard};
}
img{
    width: 125px;
}

.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

`
export const Title = styled.h1`
font-size: 18px;
font-weight: 900;
line-height: 22px;
`

export const HeaderOpacit = styled.div`
background: rgba(0, 0, 0, 0.5);
border: 1px solid transparent;
margin-bottom: 56px;


`

export const HeaderImg = styled.div`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .9;
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   
    div{
        margin-left: 170px;
    }
    
`

type  PropsWeight = {
    weight?: string
}

export const SubTitle = styled.h2<PropsWeight>`
    font-size: 32px;
    color: ${cores.textColotWhite};
    font-weight: ${(props) => props.weight === 'lighter' ? '100' : '900' };
`



