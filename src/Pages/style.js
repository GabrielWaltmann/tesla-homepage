import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        scroll-behavior: smooth;
        font-weight: 600;
        text-decoration: none;
        list-style: none;
    }

    body{
        min-height: 100vh;
        overflow: hidden !important;
        width: 100vw;
    }
`
