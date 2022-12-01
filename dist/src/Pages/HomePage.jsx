import "./style"
import { GlobalStyle } from "./style"
import { Header } from "../components/Header/Header"
import { Sections } from "../components/Sections/Sections"

export function HomePage(){
    return(
        <>
            <GlobalStyle/>
            <Header/>
            <Sections/>
        </>
    )
}
