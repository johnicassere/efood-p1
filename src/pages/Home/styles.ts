import styled from "styled-components";

export const ContainerHome = styled.div`
max-width: 1024px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 80px;
margin: 0 auto;

@media(max-width:1024px){
    column-gap: 40px;
    margin-left: calc(4%);
}

@media(max-width:768px){
    column-gap: 280px;
}

@media(max-width:426px){
    column-gap: 80px;
   margin-left: calc(40%);
   
}

`
