import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-5 pt-4 fs-2">
      <Row>
        <Col>
          <h2>Welcome to Your Website</h2>
          <p>
            This is your home page content. Add whatever content you want here.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
