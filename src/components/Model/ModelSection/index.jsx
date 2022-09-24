import { Container } from "./style";
import ModelOverlay from "../ModelOverlay";


export default function ModelSection ({modelName, overlayNode, children, className} )  {
    return (
        <Container className='colored'>
            <ModelOverlay >
                {overlayNode}
            </ModelOverlay>
        </Container>)
}