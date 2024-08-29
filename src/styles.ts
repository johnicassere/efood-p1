import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
    textColorHome: '#E66767',
    textColorPerfil: '#FFEBD9',
    textColotWhite: '#FFFFFF',
    colorBackGround: '#FFF8F2',
    backGroundCard: '#E66767'
}

export const Globalcss = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
 }

 body{
    background-color: ${cores.colorBackGround};
    color: ${cores.textColorHome};
 }
`

export const Container = styled.div`
   /* max-width: 1366px; */
   width: 100%;
   margin: 0 auto;
   /* padding-top: 24px; */
`