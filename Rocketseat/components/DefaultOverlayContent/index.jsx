import { Fragment, React } from 'react'

import './style'

export function DefaultOverlayContent({ label, description}) {
    return (
        <Container>
            <Heading>
            <h1>{label}</h1>
            <h2>{description}</h2>

            </Heading>
            <Buttons>
                <button>Custom Order</button>
                <button className='white'>Existing Inventory</button>
            </Buttons>
        </Container>
    )
}
