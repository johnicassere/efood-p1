import styled from "styled-components";
import footer from '../../assets/images/footer.png'

export const ContainerFooter = styled.footer`
background-image: url(${footer});
width: 100%;
height: 298px;
margin-top: 120px;

@media(max-width:1025px){
        width: 1055px;
   }

.logo{
    margin-top: 40px;
    width: 125px;

}

.descricao-footer{
    text-align: center;
    p{
        font-size: 10px;

    }
}

`

export const Links = styled.ul`
display: flex;

li{
    margin: 32px 8px 80px 8px;
}

`


export const displayFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`