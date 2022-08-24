import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/scss/Navigation.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" id={styles._navbar_component_}>
        <Container>
          {/* <Navbar.Brand href="#home">Point of Sale</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" id={styles._navbar_links_wrapper_}>
              <Nav.Link
                href="#home"
                style={
                  location.pathname === "/"
                    ? { background: " #6738DC", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/", { replace: true })}
              >
                Show All
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={
                  location.pathname === "/burgers"
                    ? { background: " #6738DC", color: "white" }
                    : { background: "" }
                }
              >
                Burgers
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={
                  location.pathname === "/pizza"
                    ? { background: " #6738DC", color: "white" }
                    : { background: "" }
                }
              >
                Pizza
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={
                  location.pathname === "/drinks"
                    ? { background: " #6738DC", color: "white" }
                    : { background: "" }
                }
              >
                Drinks
              </Nav.Link>
              <Nav.Link
                href="#home"
                style={
                  location.pathname === "/dessert"
                    ? { background: " #6738DC", color: "white" }
                    : { background: "" }
                }
              >
                Dessert
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
