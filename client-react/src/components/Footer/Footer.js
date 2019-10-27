import React from "react";

import "./Footer.css";

import { Col, Row, Container } from "react-bootstrap";

const anchorStyles = {
  color: "slategray",
  fontSize: "1em",
  marginRight: 15,
  textDecoration: "none"
};

function AnchorEnter(e) {
  e.target.style.color = "black";
}

function AnchorLeave(e) {
  e.target.style.color = "slategray";
}

function Footer() {
  return (
    <Container>
      <Row className="" style={{ height: 100 }} id="footer">
        <Col className="mt-5">
          <a
            href="/"
            className="float-left"
            style={anchorStyles}
            onMouseEnter={AnchorEnter}
            onMouseLeave={AnchorLeave}
          >
            Home
          </a>

          <div className="float-right">
            <a
              id="about-us"
              href="/about-us"
              style={anchorStyles}
              onMouseEnter={AnchorEnter}
              onMouseLeave={AnchorLeave}
            >
              About Us
            </a>

            <a
              href="/contact-us"
              style={anchorStyles}
              onMouseEnter={AnchorEnter}
              onMouseLeave={AnchorLeave}
            >
              Contact Us
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
