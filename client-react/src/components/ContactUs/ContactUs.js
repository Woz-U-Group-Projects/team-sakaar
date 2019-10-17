import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col>
            <h1 className="mt-5"> Contact Us </h1>
            <hr />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
