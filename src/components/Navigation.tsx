import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "../styles/scss/Navigation.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Navbar expand="lg" id={styles._navbar_component_}>
        <Container className="p-0">
          <Navbar.Brand id={styles._navbar_brand_name_}>
            Kusinero<span>Korner</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles._navbar_collapse_}
          >
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

      {/* OFFCANVAS */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {/* END */}
    </>
  );
}

export default Navigation;
