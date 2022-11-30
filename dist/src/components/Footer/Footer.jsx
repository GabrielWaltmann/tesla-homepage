<<<<<<< HEAD
import { Container } from "../Footer/style"

export function hideFooter(){
    setInterval(() => {
        const footerClasslist = document.querySelector(`Footer`).classList
        const scrollPositon = document.querySelector(`main`).scrollTop
        const width = document.body.clientWidth 

        if(scrollPositon >= 5300) footerClasslist.add(`active`)
        else if(width <= 1100) footerClasslist.remove(`active`)
        else footerClasslist.remove(`active`)
    }, 100);
}
=======
import { useEffect } from "react"
import styled from "styled-components"
>>>>>>> parent of dcfc89b (Created The Footer)

export function Footer (){

    return (
        <Containter >
            <a href="#">Tesla © 2022</a>
            <a href="#">Privacy  Legal</a>
            <a href="#">Vehicle Recalls</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </Containter>
    )
}

const Containter = styled.footer`
    background-color: #000000;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    a{
        color: #5c5e62;
    }
`