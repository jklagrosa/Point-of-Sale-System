import styled from "styled-components";
import { colorsObj } from "../styled/utils";

export const WrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;

  padding: 2rem 1rem;
  background: white;

  border-left: 3px solid ${colorsObj.PURPLE};

  /* @media only screen and (max-width: 991px) {
    display: none;
  } */
`;

export const ItemStyled = styled.div`
  margin-bottom: 1.5rem;
  background: white;
  padding: 0.512rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  border-radius: 8px;
  border-bottom: 3px solid ${colorsObj.GRAY};
`;

export const CheckOutImg = styled.img`
  width: 100%;
  display: block;
  min-height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;

  @media only screen and (min-width: 2501px) {
    min-height: 300px;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    min-height: 280px;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    min-height: 250px;
  }

  /* @media only screen and (max-width: 1199px) {

  } */
`;

export const CheckOutTitle = styled.h1`
  margin-bottom: 0.64rem;
  font-size: 1.1rem;
  font-weight: 700;

  @media only screen and (min-width: 2501px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 1199px) {
    font-size: 1rem;
  }
`;

export const CheckOutPrice = styled.h2`
  font-size: 1.1rem;
  color: ${colorsObj.PURPLE};
  font-weight: normal;

  @media only screen and (min-width: 2501px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }

  @media only screen and (max-width: 1199px) {
    font-size: 1rem;
  }
`;

export const CheckOutBtnsStyled = styled.div`
  margin: 1rem 0;
`;

export const CheckOutBtn = styled.button`
  all: unset;
  cursor: pointer;
  margin-right: 1.25rem;
  background: ${colorsObj.PURPLE};
  font-size: 1.75rem;
  color: white;
  border-radius: 10px;
  width: 60px;
  text-align: center;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active {
    background: ${colorsObj.H_PURPLE};
  }

  @media only screen and (min-width: 2501px) {
    width: 150px;
    font-size: 2.75rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 130px;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 100px;
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 70px;
    font-size: 2rem;
  }

  @media only screen and (max-width: 1199px) {
    font-size: 1.25rem;
    min-width: 50px;
    display: block;
    margin-bottom: 1rem;
  }
`;

export const CheckOutResult = styled.span`
  all: unset;
  width: 100px;
  font-size: 2rem;
  font-weight: 700;

  @media only screen and (min-width: 2501px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 2.25rem;
  }

  /*  */

  @media only screen and (max-width: 1199px) {
    font-size: 1.25rem;
  }
`;

export const CheckOutQtyText = styled.span`
  font-size: 1rem;
  font-weight: 400;

  @media only screen and (min-width: 2501px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }
`;

export const PurchaseProductsStyled = styled.div`
  margin-bottom: 2rem;
`;

export const PurchaseProductButtonStyled = styled.button`
  all: unset;
  display: block;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  width: 300px;
  background: #d22b2b;
  color: white;
  padding: 0.64rem;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  font-size: 1rem;

  &:hover,
  &:active {
    background: #880808;
  }

  @media only screen and (min-width: 2501px) {
    width: 700px;
    font-size: 2rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    width: 600px;
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    width: 500px;
    font-size: 1.5rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.25rem;
  }

  /*  */

  @media only screen and (max-width: 1199px) {
    width: 150px;
  }
`;
