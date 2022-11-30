import { Container, Navigator, Button, MenuButton, Menu } from "./style"
import { products } from "../../database/products"

export function Header(){

    function showOrHideTheMenu(){
        const menu = document.querySelector(`.close`).parentElement 
        menu.classList.toggle(`hidden`)

    }


    return(
        <Container>
            <img src="src\assets\teslaLogoSmall.svg" alt="Tesla logo" />

            <Navigator className="navigator">
                {products.map((product) => {
                    return ( 
                        <Button href="#" key={product.name}>
                            {product.name}
                        </Button> 
                    )
                })}
            </Navigator>

            <MenuButton href="#" onClick={showOrHideTheMenu}>Menu</MenuButton>
            
            <Menu className="hidden">
                <a href="#" className="close" onClick={showOrHideTheMenu}>X</a>

                {products.map((product) => {
                    return ( 
                        <li key={product.name}>
                            <a href="#">{product.name}</a> 
                        </li>
                    )
                })}
            </Menu>
        </Container>
    )
}
