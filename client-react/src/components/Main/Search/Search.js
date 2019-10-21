import React from "react";

import { Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";

import { SearchLocation } from "styled-icons/fa-solid/SearchLocation";

function Search() {
  return (
    <Row className="p-3 justify-content-center">
      <Col sm={8}>
        <p className="float-left">Search For A Band</p>
        <InputGroup className="mb-3">
          <FormControl
            size="lg"
            placeholder="Genre, Bandname"
            aria-label="Genre, Bandname"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append className="">
            <Button variant="secondary" className="px-4">
              <SearchLocation size="18" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Search;
