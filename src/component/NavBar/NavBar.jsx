import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/Navdropdown";
import Widget from "../Widget/Widget";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Musical World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Sucursales</Nav.Link>
            <NavDropdown title="Instrumentos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Pianos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bajos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Baterías</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Widget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
