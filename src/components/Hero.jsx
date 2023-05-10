import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Section = styled.div`
  min-height: calc(100vh);
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: calc(1rem + 3.5vw);
    font-family: var(--font-kronaone);
    color: #303030;
  }
  h2 {
    font-size: calc(1rem + 1vw);
    color: #303030;
    span {
      border-bottom: solid 5px #ffe347;
      color: white;
    }
  }
  button {
    align-self: flex-start;
  }
`;

const SectionBackground = styled.div`
  background-color: #7ae7c7;
  background-image: linear-gradient(19deg, #7ae7c7 0%, #a390ff 100%);
`;
const Icons = styled.div`
  font-size: 25px;
  color: #303030;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export class Hero extends Component {
  render() {
    return (
      <>
        <SectionBackground>
          <Container>
            <Section>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}>
                <h1>Pablo Bárcena.</h1>
              </motion.div>
              <h2>
                I'm a creative <span>fullstack</span> developer
              </h2>

              <Icons>
                {" "}
                <a href='https://github.com/pablobarcena99' target='_blank'>
                  <FaGithub />{" "}
                </a>
                <a href='https://www.linkedin.com/in/pablobarcena99/' target='_blank'>
                  <FaLinkedin />{" "}
                </a>
                <a href='mailto: pablobarcena99@gmail.com' target='_blank'>
                  <FaEnvelope />{" "}
                </a>
              </Icons>
            </Section>
          </Container>
        </SectionBackground>
      </>
    );
  }
}
export default Hero;
