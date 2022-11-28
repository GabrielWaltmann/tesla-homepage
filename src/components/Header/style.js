import styled from "styled-components";

export const Container = styled.header`
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 2;
    width: 100%;

    img{
        padding: 1rem 1.25rem;
    }
`

export const Navigator = styled.nav`

`

export const Button = styled.a`
    text-decoration: none;
    font-size: 1rem;
    color: #121212;
/*     background-color: #0000000D;
 */    height: 2rem;
    padding: 0.5rem 1rem;

`
