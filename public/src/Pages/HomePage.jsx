import { Container, GlobalStyle } from "./style"
import { useEffect, useState } from "react"
import { Header } from "../components/Header/Header"
import { Sections } from "../components/Sections/Sections"
import { Footer} from "../components/Footer/Footer"

export function HomePage(){

    return(
        <Container>

            <GlobalStyle/>
            <Header/>
            <Sections/>
            <Footer/>
        </Container>
    )
}
