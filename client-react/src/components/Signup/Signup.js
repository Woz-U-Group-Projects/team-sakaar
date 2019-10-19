import React, {useState, useEffect} from "react";


import './Signup.css';
import { Form, Container, Row, Col, InputGroup,FormControl, Button } from 'react-bootstrap';
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

const axios = require('axios');



function signup() {

    const handleSubmit = e => {
            
        e.preventDefault();

    }

    return(
       
        <div> 
            <Header /> <hr/>
            <Container id='container'>
                <Row className='w-50 mx-auto mt-5 align-middle' id='row' >
                    <Col className='' >

                        <Form className='' id='form' onSubmit={handleSubmit}>
                            <h3 className='mt-5 text-white' id='signup-title' >Sign Up</h3> <hr />

                            <InputGroup className="mb-3 mt-5">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning'   id="basic-addon1">Firstname</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Firstname"
                                        aria-label="Firstname"
                                        aria-describedby="basic-addon1"
                                    />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning' id="basic-addon1">Lastname</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Lastname"
                                        aria-label="Lastname"
                                        aria-describedby="basic-addon1"
                                    />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning' id="basic-addon1">Username</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />

                                    <FormControl
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                    /> 

                            </InputGroup>

                            <Button variant='primary' type='submit' size='lg' block>
                                Submit
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )

}

export default signup