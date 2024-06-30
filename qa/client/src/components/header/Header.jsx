import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../header/Header.css"; // Import the custom CSS

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          ML-MERN
        </Navbar.Brand>{" "}
        {/* Use Link instead of href */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            {/* Use Link instead of href */}
            <Nav.Link as={Link} to="/knn">
              KNN
            </Nav.Link>{" "}
            {/* Example for another route */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
