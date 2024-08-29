import styled from "styled-components";



export const ConatinerPerfil = styled.div`
max-width: 1024px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 32px;

`

export const Modal = styled.div`
opacity: 1;

&.is-open{
    opacity: .5;
    cursor: none;
}

`