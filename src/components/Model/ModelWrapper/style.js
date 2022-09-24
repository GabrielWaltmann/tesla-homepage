import styled from "styled-components";
import {motion, useScroll} from 'framer-motion'

export const Container = styled.div`
    height: 100vh;

    /* Attach at the start */
    scroll-snap-type: y mandatory;
    overflow-y: scroll;


`



