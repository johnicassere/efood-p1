import styled from "styled-components";
import { cores } from "../../styles";
import closeicon from '../../assets/images/close.png'


export const OverlayModal = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);

`

export const ModalConatiner = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
z-index:1;

&.is-open{
    display: flex;
}
`
export const SideModal = styled.aside`
background-color: ${cores.backGroundCard};
max-width: 1024px;
height: 344px;
width: 100%;
//margin: 490px auto;
margin: 142px auto;
z-index: 1;
`
export const ItemModal = styled.li`
display: flex;
color: ${cores.textColotWhite};

img{
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin: 32px 24px 32px 32px;
}

div{
    display: flex;
    flex-direction: column;
    color: ${cores.textColotWhite};
    position: relative;

    h3{
        margin-top: 32px;
        margin-bottom: 16px;
        font-size: 18px;
        font-weight: 900;
    }
    
    .button-close{
        width: 16px;
        height: 16px;
        background-image: url(${closeicon});
        background-color: transparent;
        position: absolute;
        left: 657px;
        bottom: 320px;
        border: none;
    }

    .descricao-modal{
        max-width: 656px;
        //height: 176px;

        p{
            font-size: 14px;
            line-height: 22px;
        }
    }

    button{
        margin-top: 16px;
        max-width: 218px;
        height: 24px;
        border: none;
        color: ${cores.backGroundCard};
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
    }
}
`