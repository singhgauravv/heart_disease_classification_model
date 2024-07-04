import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <Container className="mt-1 pt-2 fs-3">
      <Row className="mb-3">
        <Col>
          <h2 className="display-2 text-center">Welcome to VitaCardia</h2>
          <p className="text-center fs-2">
            MERN + ML Heart Disease Prediction Model - Binary Classification
          </p>
        </Col>
        <hr />
      </Row>
      <Row className="mb-3">
        <Col>
          <h3 className="h1 mb-3">Empower Your Health Decisions</h3>
          <p>
            VitaCardia is a project that allows you to choose amongst our 4
            trained model to make a prediction. Enter you health attributes to
            get started. This is just a fun-project that combines the power of
            python-based machine learning & JavaScript based web dev to result
            in a end-to-end project.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <h3 className="h1 mb-3">How It Works</h3>
          <ol>
            <li className="mb-2">
              <strong>Input Your Health Data:</strong> Enter key health
              attributes such as age, cholesterol levels, blood pressure, and
              more into our intuitive interface.
            </li>
            <li className="mb-2">
              <strong>Make a prediction using one of our model:</strong> This
              react client makes a request to the backend node server which in
              turn makes request to a python server that hosts our models. As
              the python server responds, the node server provides the client
              with the required data that gets displyed on the screen.
            </li>
            <li className="mb-2">
              <strong>Why two servers?</strong> Well, python-server is just
              responsible for exposing the trained models. All other business
              logic has been implemented/managed by NodeJs-based ecosystem.
            </li>
          </ol>
        </Col>
        <hr />
      </Row>
      <Row className="mb-3">
        <Col>
          <h3 className="h1 mb-3">Possible expansion ideas for VitaCardia?</h3>
          <ul>
            <li>
              <strong>Database & Auth:</strong> I plan to integrate these two on
              the maximum priority.
            </li>
            <li>
              <strong>Model Analysis:</strong> This features might include
              various scientific metrics that you can view to examine the model
              performance. May be a blog section? I don't know, writing about
              such sensitive topics must be done by professionls only.
            </li>
            <li>
              <strong>More Model</strong> Yes, I will integrate more models
              based on more advanced algorithm.
            </li>
          </ul>
        </Col>
        <hr />
      </Row>
      <Row className="mb-3">
        <Col>
          <h3 className="h1 mb-3">Join Our Community</h3>
          <p>
            Sign up today and join a growing community dedicated to proactive
            heart health. With VitaCardia, you're not just monitoring your heart
            health—you're taking a step towards a healthier future.
          </p>
        </Col>
      </Row>
      <Row className="mb-4 text-center">
        <Col>
          <Button variant="primary" size="lg">
            Start Your Assessment
          </Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3 className="h5">About Us</h3>
          <p>
            VitaCardia is developed by a passionate team of healthcare
            professionals and technologists committed to improving
            cardiovascular health through innovation and technology. Our mission
            is to provide accessible and actionable heart health insights for
            everyone.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3 className="h1 text-center">Source Code</h3>
          <p className="text-center">
            <a href="https://github.com/singhgauravv/heart_disease_classification_model">
              Github
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
