import React from "react";
import { WrapperStyled } from "../styles/styled/Wrapper";
import { HomeStyled } from "../styles/styled/Navigation";
import { Container } from "react-bootstrap";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <WrapperStyled>
        <Container className="p-0">
          <HomeStyled>
            <Card />
          </HomeStyled>
        </Container>
      </WrapperStyled>
    </>
  );
}

export default Home;
