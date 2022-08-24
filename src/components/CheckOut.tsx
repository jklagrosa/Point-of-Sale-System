import React from "react";
import {
  WrapperStyled,
  ItemStyled,
  CheckOutImg,
  CheckOutTitle,
  CheckOutPrice,
  CheckOutBtnsStyled,
  CheckOutBtn,
  CheckOutResult,
  CheckOutQtyText,
  PurchaseProductsStyled,
  PurchaseProductButtonStyled,
} from "../styles/styled/CheckOut";
import { Row, Col } from "react-bootstrap";

function CheckOut() {
  return (
    <WrapperStyled>
      <PurchaseProductsStyled>
        <PurchaseProductButtonStyled>Check Out Now</PurchaseProductButtonStyled>
      </PurchaseProductsStyled>

      {/*  */}
      <ItemStyled>
        <Row className="gx-3 gy-4">
          <Col xs={6}>
            <CheckOutImg src="/products/product1.jpg" />
          </Col>
          {/*  */}
          <Col xs={6}>
            <CheckOutTitle>The Burger Joint</CheckOutTitle>
            <CheckOutPrice>₱ 300</CheckOutPrice>
            <CheckOutBtnsStyled>
              <CheckOutBtn>+</CheckOutBtn>
              <CheckOutBtn>-</CheckOutBtn>
            </CheckOutBtnsStyled>
            <CheckOutResult>33</CheckOutResult>{" "}
            <CheckOutQtyText>Qty</CheckOutQtyText>
          </Col>
          {/*  */}
        </Row>
      </ItemStyled>
      {/*  */}

      {/*  */}
    </WrapperStyled>
  );
}

export default CheckOut;
