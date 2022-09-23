import react from 'react'
import { datas } from '../../database/datas'
import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelSection } from '../Model/export'
import { ModelWrapper } from '../Model/export'
import { Container} from './style'
function Index(){
    return (
        <Container>
            <ModelWrapper>
                {datas.map(modelName => {
                    return <ModelSection
                        key={modelName}
                        modelName={modelName}
                        overlayNode={
                            <DefaultOverlayContent
                            label={modelName}
                            description='Ordem Online for Delivery'
                        />
                    }/>      

                })}
                
            </ModelWrapper>
        </Container>


    )
}

export default Index