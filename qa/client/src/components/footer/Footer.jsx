import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
