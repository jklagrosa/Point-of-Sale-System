import styled from "styled-components";
import { colorsObj } from "../styled/utils";

export const WrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;

  padding: 2rem 1rem;
  background: white;

  border-left: 3px solid ${colorsObj.PURPLE};
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
`;

export const CheckOutTitle = styled.h1`
  margin-bottom: 0.64rem;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const CheckOutPrice = styled.h2`
  font-size: 1.1rem;
  color: ${colorsObj.PURPLE};
  font-weight: normal;
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
`;

export const CheckOutResult = styled.span`
  all: unset;
  width: 100px;
  font-size: 2rem;
  font-weight: 700;
`;

export const CheckOutQtyText = styled.span`
  font-size: 1rem;
  font-weight: 400;
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

  &:hover,
  &:active {
    background: #880808;
  }
`;
