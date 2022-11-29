import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'
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
        overflow-x: hidden;
        height: 100%;
        width: 100vw;
    }
`

export const Container = styled.div``
