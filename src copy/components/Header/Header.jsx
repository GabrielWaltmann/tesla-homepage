import styled from "styled-components";
import { infos } from "../../assets/infos";
export function Header() {
  return (
    <Container>
      <Logo
        src="src\assets\teslaLogoSmall.svg"
        alt="Logo Da tesla"
        className="logo"
      />

      <Navigator>
        {infos.map((model) => {
          const name = model.modelName
          return <Button 
                  href='#'
                  key={name}>{name}
                </Button>
        })}
      </Navigator>

      <Navigator>
        <Button>Shop</Button>
        <Button>Account</Button>
        <Button>Menu</Button>
      </Navigator>

     
    </Container>
  );
}

/* Style */
const Container = styled.header`
    font-size: 20px;
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 23px;
`

const Navigator = styled.nav`
  display: flex;
`
const Button = styled.li`
    font-weight: 500;
    height: 32px !important;
    border-radius: 5px;
    transition: all .6s ease;
    color: #171A20;
    background-color: #00000000;
    border: none;
    text-decoration: none;
    font-size: 14px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #0000001c;
        cursor: pointer;
        text-decoration: underline;
    }
`

const Logo = styled.img`
  margin: 8px 16px;
  height: 24px;
  width: 120px;

`
