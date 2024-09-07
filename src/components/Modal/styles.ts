import styled from "styled-components";
import { cores } from "../../styles";


export const DivOver = styled.div`
top:0;
left:0;
right: 0;
bottom: 0;
z-index: 0;
width: 100%;
height: 100%;
opacity: .8;
position: relative;
`


export const ContainerModal = styled.div`
width: 1366px;
height: 1624px;
margin: 0 auto;
width: 100%;
top: 0;
left: 0;
display: flex;
justify-content: center;
background: rgba(0, 0, 0, 0.8);
z-index: 1;
position: absolute;
`

export const Modal = styled.div`
width:1024px;
height: 344px;
margin-top: 490px;
margin-left: 171px;
background-color: ${cores.backGroundCard};

.overlay{
    margin: 0 auto;
}

.modal-content {
    position: relative;
    display: flex;
    
.icon-close{
    position: absolute;
    width: 16px;
    height: 16px;
    right: 0;
    top: 0;
    margin: 8px;
    cursor: pointer;
    
}
    
  .capa-item{
        display:flex;
        color: ${cores.textColotWhite};

        img{
            width: 280px;
            height: 280px;
            margin-top: 32px;
            margin-left: 32px;
            margin-bottom: 32px;
            margin-right: 24px;
            object-fit: cover;
        }
        .descricao{
            width: 656px;
            height: 176px;
            display: flex;
            flex-direction: column;

            h2{
                font-size: 18px;
                margin-top: 32px;
                margin-bottom: 16px;
                font-weight: 900;
            }

            p{
                font-size: 14px;
                line-height: 22px;
                font-weight: 400;
            }

            div{
                display: flex;
                flex-direction: row;
                text-align: center;
                max-width: 218px;
                height: 24px;
                margin-top: 20px;
                background-color: ${cores.textColorPerfil};
               
                    button{
                        font-size: 14px;
                        font-weight: 700;
                        line-height: 16px;
                        width: 100%;
                        margin: 4px 7px;
                        border: none;
                        color:${cores.backGroundCard};
                        cursor: pointer;
                    }
                
            }
        }
    }
}
`