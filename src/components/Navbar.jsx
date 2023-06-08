import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <Navbar bg='transparent' expand='lg' fixed='top' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>pablo.</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton className='btn-close-white'>
              <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                {/* <Nav.Link href='#action1'>SidearItem1</Nav.Link>
                <Nav.Link href='#action2'>SidebarItem2</Nav.Link> */}
                <NavDropdown title='Links' id='offcanvasNavbarDropdown'>
                  <NavDropdown.Item
                    href='https://www.linkedin.com/in/pablobarcena99/'
                    target='_blank'>
                    Linkedin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='https://github.com/pablobarcena99' target='_blank'>
                    Github
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Projects' id='offcanvasNavbarDropdown2'>
                  <NavDropdown.Item
                    as={Link}
                    to='polaroid'
                    spy={true}
                    smooth={false}
                    duration={0}
                    offset={-48}
                    href=''>
                    eCommerce
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to='menda_lerenda'
                    spy={true}
                    smooth={false}
                    duration={0}
                    offset={-48}
                    href=''>
                    Menda Lerenda
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>Github</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default App;
