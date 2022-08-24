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
        <Container className="p-0">
          <Navbar.Brand id={styles._navbar_brand_name_}>
            Kusinero<span>Korner</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id={styles._navbar_links_wrapper_}>
              <Nav.Link
                style={
                  location.pathname === "/"
                    ? { background: "#FDA62B", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/", { replace: true })}
              >
                Show All
              </Nav.Link>
              <Nav.Link
                style={
                  location.pathname === "/burgers"
                    ? { background: " #FDA62B", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/burgers", { replace: true })}
              >
                Burgers
              </Nav.Link>
              <Nav.Link
                style={
                  location.pathname === "/pizza"
                    ? { background: " #FDA62B", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/pizza", { replace: true })}
              >
                Pizza
              </Nav.Link>
              <Nav.Link
                style={
                  location.pathname === "/drinks"
                    ? { background: " #FDA62B", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/drinks", { replace: true })}
              >
                Drinks
              </Nav.Link>
              <Nav.Link
                style={
                  location.pathname === "/dessert"
                    ? { background: " #FDA62B", color: "white" }
                    : { background: "" }
                }
                onClick={() => navigate("/dessert", { replace: true })}
              >
                Dessert
              </Nav.Link>
            </Nav>
            {/*  */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
