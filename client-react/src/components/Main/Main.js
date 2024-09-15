import React from "react";

import "./Main.css";
import { Col, Row, Button } from "react-bootstrap";

function Main() {
  return (
    <Row id="Main" className='bg-info' style={{minHeight:700,minWidth:700,borderRadius:7}} >
      <Col className="">
        <div className="" style={{ marginTop: '12%' }} sm={12}>
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
            style={{ marginTop:50, fontSize: "5em", textShadow: "1px 1px 1px black" }}
          >
            We've Got You Covered!
          </p>
          <p>
            <Button
              href='/signup'
              id="sign-up"
              className="btn-lg shadow-lg active"
              variant="outline-warning"
            >
              Sign Up
            </Button>
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default Main;
