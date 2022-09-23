import { Container, Heading, Buttons } from "./style";

export function DefaultOverlayContent({label, description}){
    return (
        <Container>
            <Heading>
                <h1>{label}</h1>
                <h2>{description}</h2>
            </Heading>

            <Buttons>
                <button>Custom Ordem </button>
                <button className="buttonWhite">Existing Inventory</button>
            </Buttons>
        </Container>
    )
}