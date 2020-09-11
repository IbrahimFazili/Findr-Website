import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const About = () => (
  // <Styles>
  <Container fluid className="bottom-header">
    <Row>
      <Col xs={12} md={3} sm={6}>
        <p className="launch" style={{ textAlign: "left", padding: "5%" }}>
          Launching Soon
        </p>
      </Col>
      <Col xs={12} md={3} sm={6}>
        <p
          style={{
            textAlign: "left",
            padding: "5%",
            lineHeight: "35px",
          }}
        >
          <p style={{ fontSize: "x-large" }}> about </p>
          Findr is a platform to help you grow and find the perfect partner
          <br></br>-<br></br>
          No, dummy, not a date! Partner for your courses, projects, startups,
          anything!
        </p>
      </Col>
      <Col xs={12} md={3} sm={6} className="links">
        <span style={{ fontSize: "x-large", textAlign: "left", padding: "5%" }}>
          legal
        </span>
        <ul style={{ textAlign: "left", padding: "5%", lineHeight: "-35px" }}>
          <li class="nav-link">
            <Link to="/Privacy" style={{ fontSize: "large" }}>
              Privacy Policy
            </Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/TermsAndConditions" style={{ fontSize: "large" }}>
              Terms and Conditions
            </Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/Safety" style={{ fontSize: "large" }}>
              Safety Tips
            </Link>
            <div class="underline"></div>
          </li>
          <li class="nav-link">
            <Link to="/Guidelines" style={{ fontSize: "large" }}>
              Community Guidlines
            </Link>
            <div class="underline"></div>
          </li>
        </ul>
      </Col>
      <Col xs={12} md={3} sm={6}>
        <p style={{ fontSize: "large", textAlign: "left", padding: "5%" }}>
          <p style={{ fontSize: "x-large" }}>contact</p>
          <br></br>
          findr.study@gmail.com
          <br></br>(647)-779-2407
        </p>
      </Col>
    </Row>
  </Container>
  // </Styles>
);

export default About;
