
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

////////I COMMENTED OUT A LOT OF THE CODE. FEEL FREE TO FIX.


import './Signup.css';
import { Form, Container, Row, Col, InputGroup,FormControl, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";



const axios = require('axios');



function Signup( props ) {
    let history = useHistory();

    //State
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(null);
    const [accountType, setAccountType] = useState('Client');

    const [status, setStatus] = useState(0);   
    const [statusMessage, setStatusMessage] = useState('');
    const [submitted, setSubmission] = useState(false);


    useEffect( () => {

        console.log(`
            fname: ${firstname}
            lname: ${lastname}
            email: ${email}
            uname: ${username}
            status: ${status}
            status message: ${statusMessage}
            account type: ${accountType}
            submitted: ${submitted}

        `)

    })

    const handleChange = type =>  {

        setAccountType( type[1] )
    }

    const clearAllFields = () => {
        console.log('Clear All Fields')
        // Clear input fields
        setFirstname('')
        setLastname('')
        setEmail('')
        setUsername('')
        setPassword('')
        setStatusMessage('')
        setStatus('')
    };

    const clearUsernamePassword = () => {
        console.log('Clear Uname and Password')
        setUsername('')
        setPassword('')
    }

    const navigateToTypeOfAccountCreatedLogin = () => {

        if( accountType === 'Client' ){
            return '/band-login'
        } else {
            return '/venue-login'
        }

    }


    const handleSubmit = e => {
        const url = 'http://localhost:3001/signup';

        e.preventDefault();
        
        axios.post( url, {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Username: username,
            Password: password,
            AccountType:accountType
        })
        .then( res =>  {
            setSubmission(true)
            console.log( res );
            setStatusMessage( res.data.message );           
            setStatus( res.data.status );
            
            console.log('TYPE_OF_STATUS: ',typeof status)

            if( res.data.status === parseInt( 401 ) ){
                console.log('401')
                clearUsernamePassword();            
            }

            if( res.data.status === parseInt( 201 ) ){
                console.log('201')
                clearAllFields();
                history.push(
                    '/thanks-for-registering', 
                    [navigateToTypeOfAccountCreatedLogin()]
                );
            }
           
        })
        .catch( err => console.log( err ) )



    }

    return(
       
        <div> 
            <Header /> <hr/>
            <div className='bg-info text-white w-75 mx-auto p-3' style={{position:'relative', marginTop:'0px',display:!status?'none':''  }}> 
                <i>{statusMessage}</i> 
            </div>
            <Container id='container' style={{height:700,borderRadius:7}}>
                <Row className='w-100 mx-auto mt-3' id='row'>
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

                            

                            <Button variant='primary' type='submit' size='lg'  block>
                                Submit
                            </Button>

                        </Form>
                    </Col>
                    <Col sm={6} md={6}>

                            <div className='mb-3' id='account-type'>
                                <h3 className='mt-3 text-white' style={{textShadow:'1px 1px 3px black',fontSize:'2.5em'}}>Type of Account</h3> <hr className='border-white'/>
                                <small className='text-white border border-info bg-info p-2 rounded'>The Account Type will be <strong>Client</strong> by default</small> <br/>
                                <ToggleButtonGroup className='mt-3' type="checkbox" value={accountType} onChange={handleChange}>
                                    <ToggleButton value={'Client'}>Band/Musician</ToggleButton>
                                    <ToggleButton value={'Venue'}>Venue</ToggleButton>
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