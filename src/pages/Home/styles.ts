import styled from "styled-components";

export const ContainerHome = styled.div`
max-width: 1024px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 80px;
margin: 0 auto;


@media(max-width:768px){
    grid-template-columns: 1fr;
    width: 780px;
    column-gap: 10px;
    margin-left: calc(16%);
}

`
