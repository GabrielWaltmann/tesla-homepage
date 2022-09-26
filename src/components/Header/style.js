import styled from "styled-components";

export const Container = styled.header`
    font-size: 20px;
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;

    .logo{
        height: 24px;
        padding-left: 32px;
        img{
            padding: 8px 48px;
            height: 24px;
            width: 152px;
        }
    }
    


`
export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`

export const Button = styled.li`
    font-weight: 500;
    height: 32px !important;
    border-radius: 5px;
    transition: all .6s ease;
    color: #171A20;
    background-color: #00000000;
    border: none;
    text-decoration: none;
    font-size: 14px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
        margin: 0 8px;
    }
    &:hover{
        background-color: #0000001c;
        cursor: pointer;
    }
`
