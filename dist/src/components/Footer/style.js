import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 4.3rem;
    position: absolute;
    bottom: 0;
    display: none;
    transition: all .8s ease ;
    font-weight: 400;
    gap: 0.8rem;

    a{
        text-decoration: none;
        color: #5c5e62;
        margin-right: 0.5rem;
    }

    &.active{
        display: flex;
        animation-name: showElement;
        animation-duration: .5s;

    }

    @media (max-width: 1100px) {
        display: none;
    }

    @keyframes showElement {
        from{
            opacity: 0;
        }
        to{
            opacity: 100%;
        }
    }
`
