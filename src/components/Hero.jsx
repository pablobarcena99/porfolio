import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


const Section = styled.div`
  min-height: calc(100vh + 48px);
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: calc(1.9rem + 4vw);
    color: white;
    font-family: var(--font-kronaone);
  }
  h2 {
    font-size: calc(1.2rem + 1vw);
    color: white;
    span {
      border-bottom: solid 5px #a390ff;
    }
  }
`;

const SectionBackground = styled.div`
  background-color: #151515;
`;
const Icons = styled.div`
  font-size: 25px;
  color: #a390ff;
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
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
              <h1>pablo.</h1>
              </motion.div>
              <h2>
                I'm a <span>fullstack</span> developer
              </h2>
              <Icons>
                {" "}
                <a href='https://github.com/'>
                  <FaGithubSquare />{" "}
                </a>
                <a href='https://linkedin.com/'>
                  <FaLinkedin />{" "}
                </a>
                <a>
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
