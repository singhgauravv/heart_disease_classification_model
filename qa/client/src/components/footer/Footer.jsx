import React from "react";
import { Container } from "react-bootstrap";
import "../footer/Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <Container className="text-center">
        <p>
          &copy; {new Date().getFullYear()} ML-MERN @singhgauravv. All Rights
          Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
