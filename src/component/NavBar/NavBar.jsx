import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/Navdropdown";
import Widget from "../Widget/Widget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className={"mx-1 link"}>
          Musical World
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="categoria/guitarras" className={"mx-1 link"}>
              Guitarras
            </NavLink>
            <NavLink to="categoria/bajos" className={"mx-1 link"}>
              Bajos
            </NavLink>
            <NavLink to="categoria/pianos" className={"mx-1 link"}>
              Pianos
            </NavLink>
          </Nav>
          <Nav>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Widget />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
