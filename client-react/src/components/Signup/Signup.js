import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

////////I COMMENTED OUT A LOT OF THE CODE. FEEL FREE TO FIX.


import './Signup.css';
import { Form, Container, Row, Col, InputGroup,FormControl, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

const axios = require('axios')



function Signup( props ) {
    // let history = useHistory();

    const [firstname, setFirstname] = useState('');

    const [lastname, setLastname] = useState('');

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState(null);

    // const [status, setStatus] = useState('');
   
    const [ setStatusMessage] = useState('');
    // const [statusMessage, setStatusMessage] = useState('');

    let [accountType, setAccountType] = useState('');

    // const [submitted, setSubmission] = useState(false)
    // const [unmounted, setUnmounted] = useState(false)


    const handleChange = type => setAccountType(type);

    // const clearAllFields = () => {
    //     console.log('Clear All Fields')
    //     // Clear input fields
    //     setFirstname('')
    //     setLastname('')
    //     setEmail('')
    //     setUsername('')
    //     setPassword('')
    //     setStatusMessage('')
    //     setStatus('')
    // };

    // const clearUsernamePassword = () => {
    //     console.log('Clear Uname and Password')
    //     setUsername('')
    //     setPassword('')
    // }

    // const makeTheSwitch = () => {
    //     console.log(`
    //         Make the switch
    //         Account Type: ${accountType}
    //     `)
        
    //         accountType === 'Client'
    //         ? history.push('/client-login')
    //         : history.push('/venue-login')
    //      }

    const handleSubmit = e => {
        const url = 'http://localhost:3001/signup';

        e.preventDefault();
        axios.post( url, {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Username: username,
            Password: password
        })
        .then( res =>  {
            setStatusMessage( res.data.message );
            // setStatus( res.data.status );
            console.log( res );
        })
        .catch( err => console.log( err ) )
    }

    return(
       
        <div> 
            <Header /> <hr/>
            {/* <i>{statusMessage} {status}</i> */}
            <Container id='container'>
                <Row className='w-100 mx-auto mt-5' id='row' >
                    <Col className='' sm={6} >

                        <Form className='' id='form' onSubmit={handleSubmit}>
                            <h3 className='mt-5 text-white' id='signup-title' >Sign Up</h3> <hr className='border-white'/>

                            <InputGroup className="mb-3 mt-5 shadow-lg">
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

                            <InputGroup className="mb-3 shadow-lg">
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

                            <InputGroup className="mb-3 shadow-lg">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className='bg-secondary text-warning'   id="basic-addon1">Email</InputGroup.Text>
                                </InputGroup.Prepend>
                                    <FormControl
                                        name='email'
                                        type='email'
                                        value={email}
                                        onChange={ e => {
                                            setEmail( e.target.value )
                                        }}  
                                        placeholder="Email"
                                        aria-label="email"
                                        aria-describedby="basic-addon1"
                                        required
                                    />
                            </InputGroup>


                            <InputGroup className="mb-3 shadow-lg">
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
                    <Col sm={6} md={6}>
                            <div className='mb-3' id='account-type'>
                                <h3 className='mt-3 text-white' style={{textShadow:'1px 1px 3px black',fontSize:'2.5em'}}>Type of Account</h3> <hr className='border-white'/>
                                <ToggleButtonGroup type="checkbox" value={accountType} onChange={handleChange}>
                                    <ToggleButton value={'Client'}>Client</ToggleButton>
                                    <ToggleButton value={'Venue'}>Musician</ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )



}



  

export default Signup;