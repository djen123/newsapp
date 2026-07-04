import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./Appnavbar.css";

function Appnavbar() {
  return (
    <Navbar expand="lg" className="bbc-navbar">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="bbc-brand"
        >
          N N C NEWS
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="bbc-nav" className="bbc-toggle" />
        <Navbar.Collapse id="bbc-nav">
          <Nav className="me-auto bbc-links">
            <Nav.Link as={NavLink} to="/" className="bbc-link">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/latest-news" className="bbc-link">
              News
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sport" className="bbc-link">
              Sport
            </Nav.Link>
            <Nav.Link as={NavLink} to="/culture" className="bbc-link">
              Culture
            </Nav.Link>
           
          
            <Nav.Link as={NavLink} to="/tech" className="bbc-link">
              Tech
            </Nav.Link>
          </Nav>

          <Nav className="bbc-links">
            <Nav.Link className="bbc-link" href="#subscribe">
              Subscribe
            </Nav.Link>
            <Nav.Link className="bbc-link" href="#logout">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appnavbar;
