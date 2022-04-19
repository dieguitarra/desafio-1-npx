import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Widget from "../Widget/Widget";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top"
      >
        <Container>
          <NavLink to="/" className={"mx-1 link"}>
            Musical World
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/categoria/Guitarras" className={"mx-1 link"}>
                Guitarras
              </NavLink>
              <NavLink to="/categoria/Bajos" className={"mx-1 link"}>
                Bajos
              </NavLink>
              <NavLink to="/categoria/Pianos" className={"mx-1 link"}>
                Pianos
              </NavLink>
              <NavLink to="/categoria/Baterias" className={"mx-1 link"}>
                Baterías
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                to="/cart"
                //className={({ isActive }) => (isActive ? "active" : "inactive")}
                className="link"
              >
                <Widget />
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
