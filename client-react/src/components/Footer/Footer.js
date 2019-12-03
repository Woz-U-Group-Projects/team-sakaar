import React from "react";

import "./Footer.css";

import { Col, Row, Container } from "react-bootstrap";

const anchorStyles = {
  color: "#63178B",
  fontSize: "1.3em",
  marginRight: 15,
  fontWeight: 'bold',
  textDecoration: "none",
  textShadow: '1px 1px 7px grey'
};

const anchorStylesHome = {
  color: ' #03774D ',
  fontSize: "1.3em",
  marginRight: 15,
  fontWeight: 'bold',
  textDecoration: "none",
  textShadow: '1px 1px 7px grey'
}

function HomeAnchorLeave(e){
  e.target.style.color ='#03774D';
}

const HomeAchorEnter = e => {
  e.target.style.color = '#63178B';
}

function AnchorEnter(e) {
  e.target.style.color = "slategrey";
}

function AnchorLeave(e) {
  e.target.style.color = "#63178B";
}

function Footer() {
  return (
    <Container>
      <Row style={{ height: 0 }} id="footer">
        <Col className="py-0 mt-3 rounded" style={{height:40}} sm={12}>
          <a
            id='home'
            href="/"
            className="float-left"
            style={anchorStylesHome}
            onMouseEnter={HomeAchorEnter}
            onMouseLeave={HomeAnchorLeave}
          >
            Home
          </a>

          <div className="float-right">
            <a
              id="about"
              href="/about-us"
              style={anchorStyles}
              onMouseEnter={AnchorEnter}
              onMouseLeave={AnchorLeave}
            >
              About
            </a>

            <a
              id='contact'
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
