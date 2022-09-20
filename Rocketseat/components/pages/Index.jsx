import { Container } from "./style.js";
import { ModelsWrapper } from "../Model/ModelsWrapper/modelWrapper";
import { v4 as uuidv4 } from 'uuid';
import { ModelSection } from "../Model/ModelsSection/ModelSection";
import { DefaultOverlayContent } from "../DefaultOverlayContent/index";
export function Index() {
  return (
    <>
      <Container>
        <ModelsWrapper>
          <div>
            {[
              "Model One",
              "Model Two",
              "Model Three",
              "Model Four",
              "Model Five",
              "Model Six",
              "Model Seven",
            ].map((modelName) => {
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
              
            })}
          </div>
        </ModelsWrapper>
      </Container>
    </>
  );
}
