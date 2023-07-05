import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const Background = styled.div`
  background-color: #7ae7c7;
  background-image: linear-gradient(19deg, #7ae7c7 0%, #a390ff 100%);
  min-height: 500px;
  display: flex;
  align-items: center;
`;
const IconSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 10px;
  font-size: 30px;
  padding-bottom: 30px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const TextSection = styled.div`
  color: white;
  font-family: var(--font-poppins);
  p {
    text-align: right;
  }
`;
const Info = styled.div``;
const Title = styled.h2`
  color: white;
  /* writing-mode: vertical-lr;
  transform: rotate(180deg); */
  font-size: calc(1rem + 1.5vw);
  margin: 0px 0px 30px 0px;
`;

const ContactSection = () => {
  return (
    <>
      <Background>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6} xl={6}>
              <Title>Get in touch 👋</Title>
            </Col>
            <Col xs={12} md={6} lg={6} xl={6}>
              <Info>
                <IconSection>
                  <a href='https://github.com/pablobarcena99' target='_blank'>
                    <FaGithub />{" "}
                  </a>
                  <a href='https://www.linkedin.com/in/pablobarcena99/' target='_blank'>
                    <FaLinkedin />{" "}
                  </a>
                  <a href='mailto: pablobarcena99@gmail.com' target='_blank'>
                    <FaEnvelope />{" "}
                  </a>
                </IconSection>
                <TextSection>
                  <p>Pablo Bárcena Carrión</p>
                  <p>pablobarcena99@gmail.com</p>
                  <p>+34 664292833</p>
                </TextSection>
              </Info>
            </Col>
          </Row>
        </Container>
      </Background>
    </>
  );
};

export default ContactSection;
