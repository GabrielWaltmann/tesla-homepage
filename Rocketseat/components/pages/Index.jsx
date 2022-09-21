import { Container } from "./style.js";
import { ModelsWrapper } from "../Model/ModelsWrapper/modelWrapper";
import { ModelSection } from "../Model/ModelsSection/ModelSection";
import { v4 as uuidv4 } from 'uuid';
import {modelsProps} from './modelsProps' 
export function Index() {
  return (
    <>

      <Container>  
        {

          modelsProps.map(props => {

            return( 
            <ModelSection 
              content={props.name}
              key={uuidv4()}
            ></ModelSection>
            )
          })
        }
      </Container>
    </>
  );
}

/* .map((modelName) => {
              <ModelSection
                key={uuidv4()}
                className="colored"
                modelName={modelName}
                overlayNone={
                  <DefaultOverlayContent
                    label={modelName}
                    description="Order Online for Delivery"
                  />
                }
                
              />;
              
            }) */