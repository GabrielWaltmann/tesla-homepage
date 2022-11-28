import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
        scroll-behavior: smooth;
        font-weight: 600;
    }

    body{
        height: 100%;
        width: 100vw;
    }
`
