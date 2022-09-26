import { infos } from "../../assets/infos";
import { ModelSection } from "../model/ModelSection";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { isInViewport } from "../scrollAnimation/scrollAnimation";
import { Header } from "../Header/Header";

export function Page() {
    
  return (
    <Container onScroll={isInViewport}>

      {/* Header */}
      <Header/>
      

      {/* Sections */}

      {infos.map((model) => {
        return (
          <ModelSection
            label={model.modelName}
            key={model.modelName}
            description="Order Online for"
            buttonOne="Custom Ordem"
            buttonTwo="Existing Inventory"
            src={`./src/assets/${model.scr}`}
          />
        );
      })}

      {/* Footer */}


    </Container>
  );
}
