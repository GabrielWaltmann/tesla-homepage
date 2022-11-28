import styled from "styled-components"
import React, { useState, useEffect, useRef, } from 'react';
import { isOnScreen } from "./isOnScreen";

export function Footer (){
    const ref = useRef();
    const inViewport = isOnScreen(ref, '0px'); // Trigger as soon as the element becomes visible

    if (inViewport) {
        console.log('in viewport:', ref.current);
    }

  

    return (
        <Containter ref={ref}>
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