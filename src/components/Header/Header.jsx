import styled from "styled-components"
import { Container, Navigator, Button } from "./style"
import { products } from "../../database/products"
export function Header(){
    return(
        <Container>

            <img src="src\assets\teslaLogoSmall.svg" alt="Tesla logo" />

            <Navigator>
                {products.map((product) => {
                    return ( 
                        <Button href="#" key={product.name}>
                            {product.name}
                        </Button> 
                    )
                })}
            </Navigator>
            <Button href="#">Account</Button>
        </Container>
    )
}
