import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5"> About Us </h1>
            <hr />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
