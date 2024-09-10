import styled from "styled-components";
import { cores } from "../../styles";


export const DivOver = styled.div`
top:0;
left:0;
z-index: 0;
width: 1366px;
height: 1974px;
width: 100%;
opacity: .8;
position: relative;
margin: 0 auto;

`


export const ContainerModal = styled.div`
height: 1974px;
width: 100%;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.8);
z-index: 1;
//position: absolute;
position: fixed;

`

export const Modal = styled.div`
width:1024px;
height: 344px;
//margin-top: 490px;
margin: 190px auto;
background-color: ${cores.backGroundCard};


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
                margin-top: 16px;
                margin-bottom: 16px;
            }

            div{
                max-width: 218px;
                display: flex;
                text-align: center;
                margin-top: 16px;
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