import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


function Appnavbar() {

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>
          N N C news
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={({ isActive }) =>
    isActive ? "text-red-500" : "text-black"
  }>
              Home
            </Nav.Link>
            <Nav.Link as = {NavLink} to = "/latest-news">News</Nav.Link>
            
            </Nav>
          <Nav>
            <Nav.Link href="#deets">Subscribe</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appnavbar;