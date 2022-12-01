import { products } from "../../database/products";
import { Container, Section, Heading, Buttons } from "./style";

function createSection(name, description, url, buttonOne, buttonTwo){
    const width = document.body.clientWidth 
    
    function accessorieSection(device){
        const img = "../" + device + "/" + url 
        return(
             <Section 
            src={img} 
            key={name}
            >
                <Heading>
                    <h1>{name}</h1>
                    <a href="#">{description}</a>
                </Heading>

                <Buttons>
                    <button className="shopNowButton">{buttonOne}</button>
                </Buttons>
            </Section>
        )
    }

    function patternSection(device){
        const img = "../" + device + "/" + url 
        return (
            <Section 
            src={img} 
            key={name}
            >
                <Heading>
                    <h1>{name}</h1>
                    <a href="#">{description}</a>
                </Heading>

                <Buttons>
                    <button>{buttonOne}</button>
                    <button className="buttonWhite">{buttonTwo}</button>
                </Buttons>
            </Section>
        )
    }

    if(width <= 1000){
        const device = "mobile"
        if(name === 'Accessories' ) return accessorieSection(device)
        else return patternSection(device)
    }else{
        const device = "desktop"
        if(name === 'Accessories' ) return accessorieSection(device)
        else return patternSection(device)
    }

}

export function Sections(){
    return (
        <Container>
            {products.map( product => 
                createSection(product.name, product.description, product.url, product.buttonOne, product.buttonTwo)
            )}
        </Container>
    )
}
