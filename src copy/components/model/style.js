import styled from "styled-components";

/* 
Patern media querrys 
@media (min-width: 1200px) {}
@media (min-width: 600px) {}
*/


export const Container = styled.section`
    background-image: url(${(props) => props.src });
    background-size: 150%;
    background-position: center;

    display: flex;
    text-align : center;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    position: relative;

    /* Start Scrool Snap */
    scroll-snap-align: start;
`

export const Heading = styled.div`
    margin-top:16.5vh;
    text-align: center;
    h1{
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;
        color: #171A20 ;
        transition: all .7s ease;
        letter-spacing: .6px;
    }

    h2, a{
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
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
        background-color: #171a20cc;
        color: #ffffff;
        opacity: 0.8;

        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;

        padding: 13px 40px;
        border-radius: 20px;
        border: none;
        outline: 0;
        cursor: pointer;

        &.buttonWhite{
            background-color: #ffffff;
            color: #171a20cc;
            opacity: 0.65;

        }

        & + button{
            margin: 10px 0 0;
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