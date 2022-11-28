import styled from "styled-components";
import { infos } from "../../assets/infos";
import { ModelSection } from "./ModelSection";

export function Sections(){

    return(
        infos.map((model) => {
            const name = model.modelName

            if(name === 'Solar Roof' || name ===  'Solar Panels'){
            return (
                <ModelSection
                label={name}
                href='Touchless Delivery'
                key={name}
                description="Order Online for"
                buttonOne="Order Now"
                buttonTwo="Learn More"
                src={`./src/assets/${model.scr}`}
                />
            )
            }else if(name === 'Accessories'){
                
                return (
                    <ModelSection
                        label={name}
                        href='Touchless Delivery'
                        key={name}
                        description="Order Online for"
                        buttonOne="Order Now"
                        src={`./src/assets/${model.scr}`}
                    />

                )

            }
            return (
            <ModelSection
                label={name}
                href='Touchless Delivery'
                key={name}
                description="Order Online for"
                buttonOne="Custom Ordem"
                buttonTwo="Existing Inventory"
                src={`./src/assets/${model.scr}`}
            />
            );
        })
    )
}