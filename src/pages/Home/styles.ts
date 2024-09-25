import styled from "styled-components";

export const ContainerHome = styled.div`
max-width: 1024px;
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 80px;
margin: 0 auto;

@media(max-width:1024px){
  margin-left: 36px;
  column-gap: 40px;
 
}

@media(max-width:768px){
    margin-left: 38px;
}

`
