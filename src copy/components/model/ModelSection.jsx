import { Container, Heading, Buttons } from "./style";

export function ModelSection({label, description, buttonOne, buttonTwo, src, href}){
    if(label == 'Accessories'){
        return (
            <Container src={src} id='Accessories'>
                <Heading>
                    <h1>{label}</h1>
                    <h2>{description} <a href="#">{href}</a></h2>
                </Heading>

                <Buttons>
                    <button>{buttonOne}</button>
                </Buttons>
            </Container>
        )
    }else{
        return (
        <Container src={src}>
            <Heading>
                <h1>{label}</h1>
                <h2>{description} <a href="#">Touchless Delivery</a></h2>
            </Heading>

            <Buttons>
                <button>{buttonOne}</button>
                <button className="buttonWhite">{buttonTwo}</button>
            </Buttons>
        </Container>
    )
    }
    
}