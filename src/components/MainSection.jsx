import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { SiStyledcomponents } from "react-icons/si";

const SectionBackground = styled.div`
  /* background-color: #cdf961; */
  background-color: #131313;
  min-height: 400px;
  padding: 50px 0px;
  display: flex;
  align-items: center;
`;
const Section = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`;
const Title = styled.h2`
  color: white;
  /* writing-mode: vertical-lr;
  transform: rotate(180deg); */
  font-size: calc(1rem + 1.5vw);
  margin: 0px;
`;
const Content = styled.div`
  width: 100%;

  p {
    color: white;
  }
  img {
    /* border-radius: 20px; */
    width: 100%;
    border: 2px solid grey;
    border-radius: 2px;
    :hover {
      transform: scale(1.02);
    }
  }
  ul {
    list-style: none;
    padding: 0px;
    li {
      color: #aedf26;
    }
  }
`;

const Links = styled.p`
  color: #a390ff !important;
`;
function TecnologiesList(props) {

  const tecnologies = props.tecnologies;
  const listItems = tecnologies.map((element) => <li key={element.id}>{element}</li>);
  console.log(listItems);
  return <ul>{listItems}</ul>;
}

const MainSection = (props) => {
  return (
    <>
      <SectionBackground>
        <Container>
          <Section>
            <Title>{props.title}</Title>
            <Content>
              <Row>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <p>{props.desc}</p>
                  <TecnologiesList tecnologies={props.tecnologies} />
                  <br />
                  <Links>//Repository</Links>
                  <Links>//Preview</Links>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6}>
                  <a href={props.link} target='_blank'>
                    <img src={props.img} alt='preview' />
                  </a>
                </Col>
              </Row>
            </Content>
          </Section>
        </Container>
      </SectionBackground>
    </>
  );
};

export default MainSection;
