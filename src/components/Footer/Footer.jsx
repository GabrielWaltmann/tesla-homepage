import { Container } from "../Footer/style"

export function hideFooter(){
    setInterval(() => {
        const footerClasslist = document.querySelector(`Footer`).classList
        const scrollPositon = document.querySelector(`main`).scrollTop

        if(scrollPositon >= 5300) footerClasslist.add(`active`)
        else footerClasslist.remove(`active`)
    }, 100);
}

export function Footer (){
    hideFooter()
    return (
        <Container>
            <a href="#">Tesla © 2022</a>
            <a href="#">Privacy  Legal</a>
            <a href="#">Vehicle Recalls</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
            <a href="#">News</a>
            <a href="#">Engage</a>
            <a href="#">Locations</a>
        </Container>
    )
}
