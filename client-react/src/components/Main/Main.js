import React from "react";

import "./Main.css";
import { Col, Row, Button } from "react-bootstrap";

function Main() {
  return (
    <Row id="Main" className="">
      <Col className="">
        <div className="" style={{ marginTop: 50 }}>
          <p
            className=""
            style={{ fontSize: "2.5em", textShadow: "1px 1px 1px black" }}
          >
            Are you looking to hire a band?
          </p>
          <p
            className=""
            style={{ fontSize: "2.5em", textShadow: "1px 1px 1px black" }}
          >
            Are you a band looking for a local gig?
          </p>
          <p
            className="font-weight-bold"
            style={{ fontSize: "5em", textShadow: "1px 1px 1px black" }}
          >
            We've Got You Covered!
          </p>
          <p>
            <Button
              id="sign-up"
              className="btn-lg active"
              variant="outline-light"
            >
              Sign Up
            </Button>
          </p>
          <p>
            <Button
              id="learn-more"
              className="btn-lg"
              variant="outline-warning"
            >
              Learn More
            </Button>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
