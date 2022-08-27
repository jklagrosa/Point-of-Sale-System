import styled from "styled-components";
import { colorsObj } from "../styled/utils";

export const CardBodyStyled = styled.div`
  width: 250px;
  background: white;
  padding: 0.64rem;
  /* color: ${colorsObj.GRAY};
   */
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  color: black;
  overflow: hidden;
  &:hover,
  &:active {
    img {
      transform: scale(1.15);
    }
  }

  @media only screen and (max-width: 991px) {
    width: 300px;
  }

  @media only screen and (max-width: 767px) {
    width: 500px;
  }

  @media only screen and (max-width: 576px) {
    width: 300px;
  }

  @media only screen and (max-width: 375px) {
    width: 280px;
  }
`;

export const CardImageStyled = styled.img`
  margin-bottom: 1rem;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
`;

export const TitleStyled = styled.h1`
  margin-bottom: 0.64rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PriceStyled = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: normal;
  color: ${colorsObj.PURPLE};
`;

export const TotalSaleStyled = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  color: ${colorsObj.ORANGE};
  margin-right: 10px;
`;

export const CardDetailsStyled = styled.div`
  display: flex;
  align-items: center;
`;
