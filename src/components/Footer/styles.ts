import styled from "styled-components";
import footer from '../../assets/images/footer.png'

export const ContainerFooter = styled.footer`
background-image: url(${footer});
width: 100%;
height: 298px;
margin-top: 120px;

@media(max-width:768px){
    width: 768px;
    margin-top: 60px;
    
}



.logo{
    margin-top: 40px;
    
    @media(max-width:768px){
        border-radius:4px;
}

}

.descricao-footer{
    text-align: center;
    font-size: 10px;
    p{

    }
}

`

export const Links = styled.ul`
display: flex;

li{
    margin: 32px 8px 80px 8px;

    @media(max-width:768px){
        margin: 26px 8px 30px 8px;
    
}

}

`


export const displayFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`