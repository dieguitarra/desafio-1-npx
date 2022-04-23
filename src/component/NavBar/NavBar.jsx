import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Widget from "../Widget/Widget";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="sticky-top py-3 "
      >
        <Container>
          <NavLink to="/" className={"mx-2 link fs-5"}>
            Musical World
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/category/Guitarras " className={"mx-2 link fs-5"}>
                Guitarras
              </NavLink>
              <NavLink to="/category/Bajos " className={"mx-2 link fs-5"}>
                Bajos
              </NavLink>
              <NavLink to="/category/Pianos " className={"mx-2 link fs-5"}>
                Pianos
              </NavLink>
              <NavLink to="/category/Baterías " className={"mx-2 link fs-5"}>
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
