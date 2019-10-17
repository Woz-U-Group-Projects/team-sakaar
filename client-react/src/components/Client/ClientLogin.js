import React from "react";
import "./Client.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button
} from "react-bootstrap";
import ClientHeader from "./ClientHeader";
import Footer from "../Footer/Footer";

function ClientLogin() {
  return (
    <div>
      <ClientHeader />
      <Container>
        <Row>
          <Col id="client-pic-container" className="shadow-lg" />
        </Row>

        <Row>
          <Col className="mt-5 p-5" md={12}>
            <div className="w-75 m-auto">
              <InputGroup className="mb-3 shadow">
                <FormControl
                  className="border border-dark"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <FormControl
                  className="border border-dark"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                  <Button
                    variant="dark"
                    type="submit"
                    className="float-right border border-darl"
                  >
                    Login
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ClientLogin;
