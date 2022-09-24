import { Container } from "./style";
export default function ModelWrapper({children}){ 

    return (
        <>

            <Container>

                {children}
            </Container>
        </>
    )
}