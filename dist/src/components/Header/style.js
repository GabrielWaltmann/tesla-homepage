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
        min-width: 7.5rem;
    }
`

export const Navigator = styled.nav`
    padding: 1.5rem 2rem;
    display: flex ;

    @media (max-width: 1100px) {
        display: none !important;
    }
`

export const Button = styled.a`
    font-size: 1rem;
    color: #121212;
    height: 2rem;
    padding: 0.5rem 1rem;

    &:hover{
        background-color: #a2b4c34a;
        transition: all .4s;
        border-radius: .4rem;
    }
`

export const MenuButton = styled.a`
    font-size: 1rem;
    color: #121212;
    height: 2rem;
    padding: 0.5rem 1.8rem;

    &:hover{
        background-color: #a2b4c34a;
        transition: all .4s;
        border-radius: .4rem;
    }
`

export const Menu = styled.ul`
    height: 100vh;
    color: #0000;
    right: 0px;
    top: 0;
    width: 50%;
    text-align: end;
    right: 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding: 2.5rem;
    gap: 2rem;
    position: absolute;
    text-align: left;
    transition: all .6s ease-in;

    &.hidden{
         right: -100%;
         display: none !important;
    }
    
    li{
        width: 100%;
        transition: all .2s;

        &:hover{
            background-color: #a2b4c34a;
        }

        a{
            height: 2rem;
            width: 100%;
            color: #000000;
            display: flex;
            margin-left: .75rem;
            align-items: center;
            transition: all .5s ease;
        }
    }

    .close{
        color: #000000;
        height: 30px;
        width: 30px;
        margin-left: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: .4rem;
        transition: all .4s ease;

        &:hover{
            background-color: #a2b4c34a;
        }
    }
`
