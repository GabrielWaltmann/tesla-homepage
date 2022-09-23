import { Container } from "./style";

export default function ModelSection ({modelName, overlayNode, children, className} )  {
    return <Container className='colored'> {modelName}</Container>
}