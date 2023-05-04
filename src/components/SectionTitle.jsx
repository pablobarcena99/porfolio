import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  font-size: calc(2rem + 2vw);
  padding: 0px;
  margin: 0px;
`;
const SectionTitleContainer = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(163, 144, 255, 1) 100%);
  padding: 30px 0px;
  min-height: 100px;
`;

const SectionTitle = (props) => {
  return (
    <SectionTitleContainer>
      <Container>
        <Title>{props.title}</Title>
      </Container>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
