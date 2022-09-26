import { Container, Button, List } from "./style";
export function Header() {
  return (
    <Container>
      {/* Logo */}
      <img
        src="src\assets\teslaLogoSmall.svg"
        alt="Logo Da tesla"
        className="logo"
      />

      {/* nav */}
      <nav>
        <List>
          <Button>
            <span>Model S</span>
          </Button>

          <Button>
            <span>Model 3</span>
          </Button>

          <Button>
            <span>Model X</span>
          </Button>

          <Button>
            <span>Model Y</span>
          </Button>

          <Button>
            <span>Solar Roof</span>
          </Button>

          <Button>
            <span>Solar Panels</span>
          </Button>
        </List>
      </nav>

      <nav>
        <List>
          <Button>
            <span>Shop</span>
          </Button>

          <Button>
            <span>Accout</span>
          </Button>

          <Button>
            <span>Menu</span>
          </Button>
        </List>
      </nav>
    </Container>
  );
}
