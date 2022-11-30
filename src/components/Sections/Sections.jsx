import { products } from "../../database/products";
import { Container, Section, Heading, Buttons } from "./style";

function createSection(name, description, url, buttonOne, buttonTwo){
    url = "./src/assets/" + url

    if(name === 'Accessories' ){
        return (
            <Section 
            src={url} 
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
    else return (
        <Section 
        src={url} 
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

export function Sections(){
    return (
        <Container>
            {products.map( product => 
                createSection(product.name, product.description, product.url, product.buttonOne, product.buttonTwo)
            )}
        </Container>
    )
}
