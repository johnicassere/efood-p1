import styled from "styled-components";

export const ContainerHome = styled.div`
max-width: 1024px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 80px;
margin: 0 auto;


@media(max-width:768px){
    width: 768px;
    column-gap: 10px;
    margin-left: 8px;
}

@media(max-width:426px){
    width: 425px;
    grid-template-columns: 1fr;
    margin: 0 calc(54%);
}

`
