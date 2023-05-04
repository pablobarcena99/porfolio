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

function App() {
  return (
    <>
      <Navbar bg='transparent' expand='lg' fixed='top' variant="dark">
        <Container>
          <Navbar.Brand href='#'>pablo.</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'>
            <Offcanvas.Header closeButton className="btn-close-white">
              <Offcanvas.Title id='offcanvasNavbarLabel'></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-endflex-grow-1pe-3'>
                <Nav.Link href='#action1'>SidearItem1</Nav.Link>
                <Nav.Link href='#action2'>SidebarItem2</Nav.Link>
                <NavDropdown title='Dropdown' id='offcanvasNavbarDropdown'>
                  <NavDropdown.Item href='#action3'>DropdownItem1</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>DropdownItem2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>DividedItem</NavDropdown.Item>
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
