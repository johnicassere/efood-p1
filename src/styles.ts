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
    outline: none;
 }


 body{
    background-color: ${cores.colorBackGround};
    color: ${cores.textColorHome};
    width: 100%;
 }
`
