import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const NavbarWrapper = styled.nav`
  position: fixed;
  min-height: 65px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(20px) !important;
  color: #141414;
`;
const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const Logo = styled.a`
  font-size: 20px;
  margin: 0;
  font-family: var(--font-varent);
  color: white !important;
`;

const MenuToggle = styled.div`
  cursor: pointer;
  padding: 0.5rem;
  color: white;
  display: flex;
  flex-direction: column;
`;

const HamburgerIcon = styled.span`
  display: block;
  height: 2px;
  width: 20px;
  border-radius: 1px;
  background-color: white;
  margin: 5px 0 5px 0;
  transform-origin: center;
`;

const Menu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: #141414;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CollapsedMenuLinks = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 1rem;
  color: white;
  padding: 18px;
  text-align: left;
  a {
    :hover {
      color: #7ae7c7;
    }
  }
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin: 16px 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const NavLinks = styled.div`
  flex-grow: 1;
  display: flex;

  align-items: center;
  gap: 32px;
`;
const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;
  z-index: 1000;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavbarWrapper>
        <Container>
          <NavbarContainer>
            <NavLinks>
              <Logo as={Link} href='/'>
                pablo
              </Logo>
            </NavLinks>
            <NavItems className='flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                width='20'
                height='20'
                onClick={handleToggleMenu}
                style={{ cursor: "pointer" }}>
                <rect x='0' y='4' width='20' height='2' rx='1' fill='#FFFFFF' />
                <rect x='0' y='14' width='20' height='2' rx='1' fill='#FFFFFF' />
              </svg>
            </NavItems>
          </NavbarContainer>
        </Container>
      </NavbarWrapper>
      {isMenuOpen && (
        <Menu>
          <Container>
            <div
              style={{
                height: "65px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                width='20'
                height='20'
                onClick={handleToggleMenu}
                style={{ cursor: "pointer" }}>
                <line x1='4' y1='4' x2='16' y2='16' stroke='white' stroke-width='2' />
                <line x1='4' y1='16' x2='16' y2='4' stroke='white' stroke-width='2' />
              </svg>
            </div>

            <CollapsedMenuLinks>
              <MenuItems>
                <a href='https://www.linkedin.com/in/pablobarcena99/' target='_blank'>
                  Linkedin
                </a>
                <a href='https://github.com/pablobarcena99' target='_blank'>
                  Github
                </a>
                <Link
                  as={Link}
                  to='contact'
                  spy={true}
                  smooth={false}
                  duration={0}
                  offset={-48}
                  href=''
                  onClick={handleToggleMenu}>
                  Contact
                </Link>

                <h4>Projects</h4>
                <Link
                  as={Link}
                  to='polaroid'
                  spy={true}
                  smooth={false}
                  duration={0}
                  offset={-48}
                  href=''
                  onClick={handleToggleMenu}>
                  Polaroid
                </Link>
                <Link
                  as={Link}
                  to='menda_lerenda'
                  spy={true}
                  smooth={false}
                  duration={0}
                  offset={-48}
                  href=''
                  onClick={handleToggleMenu}>
                  Menda Lerenda
                </Link>
                <Link
                  as={Link}
                  to='dear'
                  spy={true}
                  smooth={false}
                  duration={0}
                  offset={-48}
                  href=''
                  onClick={handleToggleMenu}>
                  Dear:
                </Link>
              </MenuItems>
            </CollapsedMenuLinks>
          </Container>
        </Menu>
      )}
    </>
  );
};

export default Navbar;
