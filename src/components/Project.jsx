import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { SiStyledcomponents } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SectionBackground = styled.div`
  /* background-color: #141414; */
  /* background-color: #131313; */
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
  margin: 0px 0px 30px 0px;
`;
const Content = styled.div`
  width: 100%;

  p {

    color: white;
    font-family: var(--font-poppins);
  }
  img {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  ul {
    list-style: none;
    padding: 0px;
    li {
      color: #7ae7c7;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 25px;
  color: #a390ff !important;
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const ProjectDesc = styled.div`
  /* background-color: #ed4d6e; */
  /* background-image: linear-gradient(90deg, #ed4d6e 0%, #ff6a88 55%, #ff99ac 100%); */
  height: 100%;
  border-radius: 4px;
`;
function TecnologiesList(props) {
  const tecnologies = props.tecnologies;
  const listItems = tecnologies.map((element) => <li key={element.id}>{element}</li>);
  console.log(listItems);
  return <ul>{listItems}</ul>;
}

const Project = (props) => {
  return (
    <>
      <SectionBackground>
        <Container>
          <Section>
            <Content>
              <Row>
                <Col xs={12} md={6} lg={6} xl={6} className="mt-3">
                  <Title>{props.title}</Title>
                  <ProjectDesc>
                    <p>{props.desc}</p>
                    <TecnologiesList tecnologies={props.tecnologies} />
                    <br />
                    <Links>
                      <a href={props.repo} target='_blank'>
                        <FaGithub />
                      </a>
                      <a href={props.link} target='_blank'>
                        <FaGlobe />
                      </a>
                    </Links>
                  </ProjectDesc>
                </Col>
                <Col xs={12} md={6} lg={6} xl={6} className="mt-3">
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

export default Project;
