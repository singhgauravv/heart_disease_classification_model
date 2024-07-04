import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../header/Header.css"; // Import the custom CSS

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          VitaCardia
        </Navbar.Brand>{" "}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/knn">
              K-Nearest Neighbors Classifier
            </Nav.Link>{" "}
            <Nav.Link as={Link} to="/gslogistic">
              GridSearchCV LogisticRegression
            </Nav.Link>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
