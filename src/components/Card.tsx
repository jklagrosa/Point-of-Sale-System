import React from "react";
import {
  CardBodyStyled,
  CardImageStyled,
  TitleStyled,
  PriceStyled,
  TotalSaleStyled,
  CardDetailsStyled,
} from "../styles/styled/Card";
import { AbbrTagStyled } from "../styles/styled/Wrapper";
import { Row, Col } from "react-bootstrap";
import { BsGraphDown, BsGraphUp } from "react-icons/bs";
import styles from "../styles/scss/Card.module.scss";

function Card() {
  return (
    <>
      <Row className="gx-3 gy-4">
        <Col xs={12} md={6} xl={4}>
          <CardBodyStyled>
            <CardImageStyled src="/products/product1.jpg" loading="lazy" />
            <TitleStyled>The Burger Joint</TitleStyled>

            <PriceStyled>₱ 300</PriceStyled>
            <CardDetailsStyled>
              <TotalSaleStyled>33 total sales</TotalSaleStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphDown
                  id={styles._card_graph_icon_}
                  style={{ color: "red" }}
                />
              </AbbrTagStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphUp
                  id={styles._card_graph_icon_}
                  style={{ color: "green" }}
                />
              </AbbrTagStyled>
              {/*  */}
            </CardDetailsStyled>
          </CardBodyStyled>
        </Col>
        {/*  */}

        <Col xs={12} md={6} xl={4}>
          <CardBodyStyled>
            <CardImageStyled src="/products/product1.jpg" loading="lazy" />
            <TitleStyled>The Burger Joint</TitleStyled>

            <PriceStyled>₱ 300</PriceStyled>
            <CardDetailsStyled>
              <TotalSaleStyled>33 total sales</TotalSaleStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphDown
                  id={styles._card_graph_icon_}
                  style={{ color: "red" }}
                />
              </AbbrTagStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphUp
                  id={styles._card_graph_icon_}
                  style={{ color: "green" }}
                />
              </AbbrTagStyled>
              {/*  */}
            </CardDetailsStyled>
          </CardBodyStyled>
        </Col>
        {/*  */}

        <Col xs={12} md={6} xl={4}>
          <CardBodyStyled>
            <CardImageStyled src="/products/product1.jpg" loading="lazy" />
            <TitleStyled>The Burger Joint</TitleStyled>

            <PriceStyled>₱ 300</PriceStyled>
            <CardDetailsStyled>
              <TotalSaleStyled>33 total sales</TotalSaleStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphDown
                  id={styles._card_graph_icon_}
                  style={{ color: "red" }}
                />
              </AbbrTagStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphUp
                  id={styles._card_graph_icon_}
                  style={{ color: "green" }}
                />
              </AbbrTagStyled>
              {/*  */}
            </CardDetailsStyled>
          </CardBodyStyled>
        </Col>
        {/*  */}

        <Col xs={12} md={6} xl={4}>
          <CardBodyStyled>
            <CardImageStyled src="/products/product1.jpg" loading="lazy" />
            <TitleStyled>The Burger Joint</TitleStyled>

            <PriceStyled>₱ 300</PriceStyled>
            <CardDetailsStyled>
              <TotalSaleStyled>33 total sales</TotalSaleStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphDown
                  id={styles._card_graph_icon_}
                  style={{ color: "red" }}
                />
              </AbbrTagStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphUp
                  id={styles._card_graph_icon_}
                  style={{ color: "green" }}
                />
              </AbbrTagStyled>
              {/*  */}
            </CardDetailsStyled>
          </CardBodyStyled>
        </Col>
        {/*  */}

        <Col xs={12} md={6} xl={4}>
          <CardBodyStyled>
            <CardImageStyled src="/products/product1.jpg" loading="lazy" />
            <TitleStyled>The Burger Joint</TitleStyled>

            <PriceStyled>₱ 300</PriceStyled>
            <CardDetailsStyled>
              <TotalSaleStyled>33 total sales</TotalSaleStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphDown
                  id={styles._card_graph_icon_}
                  style={{ color: "red" }}
                />
              </AbbrTagStyled>
              {/*  */}
              <AbbrTagStyled title="33 total sales">
                <BsGraphUp
                  id={styles._card_graph_icon_}
                  style={{ color: "green" }}
                />
              </AbbrTagStyled>
              {/*  */}
            </CardDetailsStyled>
          </CardBodyStyled>
        </Col>
        {/*  */}
      </Row>
    </>
  );
}

export default Card;
