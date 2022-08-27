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

  @media only screen and (min-width: 2501px) {
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    width: 260px;
  }

  /*  */

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

  @media only screen and (min-width: 2501px) {
    min-height: 300px;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    min-height: 250px;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    min-height: 200px;
  }
`;

export const TitleStyled = styled.h1`
  margin-bottom: 0.64rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: capitalize;

  @media only screen and (min-width: 2501px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.75rem;
  }
`;

export const PriceStyled = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: normal;
  color: ${colorsObj.PURPLE};

  @media only screen and (min-width: 2501px) {
    font-size: 2.25rem;
  }

  @media only screen and (min-width: 2201px) and (max-width: 2500px) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 1801px) and (max-width: 2200px) {
    font-size: 1.75rem;
  }

  @media only screen and (min-width: 1400px) and (max-width: 1800px) {
    font-size: 1.5rem;
  }
`;

export const TotalSaleStyled = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  color: ${colorsObj.ORANGE};
  margin-right: 10px;

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

export const CardDetailsStyled = styled.div`
  display: flex;
  align-items: center;
`;
