import React from "react";

import "./Footer.css";

import { Col, Row, Container } from "react-bootstrap";

const anchorStyles = {
  color: "slategray",
  fontSize: "1.3em",
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
      <Row className="" style={{ height: 0 }} id="footer">
        <Col className="py-4 " sm={12}>
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
              About
            </a>

            <a
              href="/contact-us"
              style={anchorStyles}
              onMouseEnter={AnchorEnter}
              onMouseLeave={AnchorLeave}
            >
              Contact
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
