import styled from "styled-components";
import { colorsObj } from "../styled/utils";

export const WrapperStyled = styled.div`
  width: 100vw;
  /* background-color: ${colorsObj.GRAY}; */
  background-color: whitesmoke;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const AbbrTagStyled = styled.abbr`
  all: unset !important;
`;
