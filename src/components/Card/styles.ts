import styled from "styled-components";
import image from '../../assets/images/imagem.png'
import { cores } from "../../styles";


export const CardContainer = styled.div`
width: 472px;
right: 398px;
border: 1px solid ${cores.backGroundCard};
background-color: ${cores.textColotWhite};
margin-bottom: 48px;



.destaque{
    background-image: url(${image});
    width: 100%;
    height: 217px;
    display: flex;
    flex: row;
    justify-content: flex-end;  
}

a{
    color: ${cores.textColotWhite};
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
}

p{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 16px;
    padding: 8px;
    
}

button{
    width: 82px;
    height: 24px;
    font-weight: 700;
    font-size: 14px;
    background-color: ${cores.backGroundCard};
    color: ${cores.textColotWhite};
    border: none;
    cursor: pointer;
    margin: 16px 8px 8px 8px;
    
}
`
export const Links = styled.ul`
    display: flex;
    text-align: center; 

    .destaque-semana{
        width: 121px;
        height: 26px; 
    }

`
export const LinkItem = styled.li`
    width: 60px;
    height: 26px;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    margin: 16px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${cores.backGroundCard};

`

export const Title = styled.h2`
    color: ${cores.backGroundCard};
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    margin: 8px;

`

export const ContainerPontu = styled.div`
display: flex;
justify-content: space-between;

div{
    display: flex;
    flex-direction: row;
    align-items: center;

    span{
        font-size: 18px;
        font-weight: 700;
    }
}

img{
    margin: 8px;
}
`

type CapaProps = {
    capa?: string
}

export const Destaque = styled.div<CapaProps>`
    background-image: url(${(props) => props.capa});
    width: 100%;
    height: 217px;
    display: flex;
    flex: row;
    justify-content: flex-end; 

`