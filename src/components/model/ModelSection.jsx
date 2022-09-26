import { Container, Heading, Buttons } from "./style";

export function ModelSection({label, description, buttonOne, buttonTwo, src}){


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