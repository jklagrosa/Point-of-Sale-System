import React from "react";
import Navigation from "../components/Navigation";
import CheckOut from "../components/CheckOut";
import { Row, Col } from "react-bootstrap";

function Layout({ children }: any) {
  return (
    <>
      <Navigation />

      <Row className="gx-5 gy-0">
        <Col xs={12} lg={8}>
          {children}
        </Col>
        {/*  */}
        <Col xs={12} lg={4}>
          <CheckOut />
        </Col>
        {/*  */}
      </Row>
    </>
  );
}

export default Layout;
