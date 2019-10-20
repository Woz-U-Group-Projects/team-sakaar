import React, { useState, useEffect } from 'react';


import './Signup.css';
import { Form, Container, Row, Col, InputGroup,FormControl, Button } from 'react-bootstrap';
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

const axios = require('axios');



function Signup( props ) {

    const [firstname, setFirstname] = useState('');
    useEffect( () => {
        console.log(`
            fname: ${firstname}
        `)
    });

    const [lastname, setLastname] = useState('');
    useEffect( () => {
        console.log(`
            lname: ${lastname}
        `)
    });
    const [username, setUsername] = useState('');
    useEffect( () => {
        console.log(`
            uname: ${username}
        `)
    });
    const [password, setPassword] = useState(null);
    useEffect( () => {
        console.log(`
            pwd: ${password}
        `)
    });
    

    

    const handleSubmit = e => {
        const url = 'http://localhost:3001/signup'; 

        e.preventDefault();
        axios.post( url, {
            FirstName: firstname,
            LastName: lastname,
            Username: username,
            Password: password
        })
        .then( res =>  console.log( res ) )
        .catch( err => console.log( err ) )


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
                                        name='firstname'
                                        type='text'
                                        value={firstname}
                                        onChange={ e => {
                                            setFirstname( e.target.value )
                                        }}  
                                        placeholder="Firstname"
                                        aria-label="Firstname"
                                        aria-describedby="basic-addon1"
                                        required
                                    />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning' id="basic-addon1">Lastname</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl
                                        name='lastname'
                                        type='text'
                                        value={lastname}
                                        onChange={ e => {
                                            setLastname( e.target.value )
                                        }} 
                                        placeholder="Lastname"
                                        aria-label="Lastname"
                                        aria-describedby="basic-addon1"
                                        required
                                    />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning' id="basic-addon1">Username</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl

                                        name='username'
                                        type='text'
                                        value={username}
                                        onChange={ e => {
                                            setUsername( e.target.value )
                                        }} 
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        required
                                    />

                                    <FormControl
                                        name='password'
                                        type='password'
                                        value='password'
                                        onChange={ e => {
                                            setPassword( e.target.value )
                                        }} 
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        required
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

export default Signup