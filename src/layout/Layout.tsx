import React from "react";
import Navigation from "../components/Navigation";
import CheckOut from "../components/CheckOut";
import { Row, Col } from "react-bootstrap";
import styles from "../styles/scss/CheckOut.module.scss";

function Layout({ children }: any) {
  return (
    <>
      <Navigation />

      <Row className="gx-5 gy-0">
        <Col xs={12} lg={8}>
          {children}
        </Col>
        {/*  */}
        <Col xs={12} lg={4} id={styles._hide_checkout_on_small_devices_}>
          <CheckOut />
        </Col>
        {/*  */}
      </Row>
    </>
  );
}

export default Layout;
