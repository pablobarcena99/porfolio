import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Title = styled.h3`
  color: black;
  padding: 0px;
  margin: 0px;
`;
const SectionTitleContainer = styled.div`
  padding: 30px 0px;
  min-height: 100px;
  background-color: #a390ff;
`;

const SectionTitle = (props) => {
  return (
    <SectionTitleContainer>
      <Container>
        <FadeInWhenVisible>
          <Title>{props.title}</Title>
        </FadeInWhenVisible>
      </Container>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
