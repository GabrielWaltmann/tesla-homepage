import styled from "styled-components"

export const Container = styled.main`
    height: 100vh;
    width: 100vw;

    /* Attach at the start */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`
export const Section = styled.section`
    background-image: url(${(props) => `${props.src}` });
    background-size: 150%;
    background-position: center;
    display: flex;
    text-align : center;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    background-size: cover;

    /* Start Scrool Snap */
    scroll-snap-align: start;
`

export const Heading = styled.section`
    margin-top:16.5vh;
    text-align: center;

    h1{
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 48px;
        color: #171A20 ;
        transition: all .7s ease;
        letter-spacing: .6px;
    }

    h2, a{
        font-weight: 500;
        font-size: 1rem;
        line-height: 20px;
        letter-spacing: .8px;
        color: #5c5e62;
    }
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 130px;
    
    button{
        min-width: 210px;
        min-height: 40px;
        background-color: #171a20cc;
        color: #ffffff;
        opacity: 0.8;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.6px;
        padding: 13px 40px;
        border-radius: 4px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.buttonWhite{
            background-color: #ffffff;
            color: #121212;
            opacity: 0.65;
        }

        & + button{
            margin: 10px 0 0;
        }

        &.shopNowButton{
            background-color: #000000;
            min-width: 260px;
            min-height: 44px;
        }
    }

    @media (min-width: 600px) {
        flex-direction: row;
        margin-bottom: 90px;

        button + button{
            margin: 0 0 0 10px;
        }
    }
`