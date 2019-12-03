import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import cookies from 'cookiesjs';

import "./Band.css";
import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Form
} from "react-bootstrap";
import BandHeader from "./BandHeader";
import Footer from "../Footer/Footer";




function BandLogin() {
  const axios = require('axios');
  let history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  // const [statusMessage, setStatusMessage] = useState('');
  // const [firstTimeLogin, setFirstTimeLogin] = useState(true)


  const handleSubmit = e => {
    e.preventDefault();

    const url = 'http://localhost:3001/band-login';
    axios.post( url, {
        Username: username,
        Password: password,
    })
    .then( res =>  {
        setSubmit(true);
        // console.log(res.data)
        if( res.data.status === parseInt( 401 ) ){
              setStatus( res.data.status )
              setError( res.data.message )
              console.log( res.data.status)
        }
  
        if( res.data.status === parseInt( 200 ) ){
            setStatus( res.data.status )

            //set cookie and verify
            cookies({ jwt: res.data.token });

              if( res.data.firstTimeLogin ){
                history.push(`/band-profile`);
              }

              
        };
       
    })
    .catch( err => console.log( err ) )
  
  }

  return (
    <div>
      <BandHeader />
      <Container>

        <Row>
          <Col md={12} id="client-pic-container" className="shadow-lg"  style={{height:500,borderRadius:7}} />
        </Row>
        

        <Row>
        <Col className="mt-5 p-5 mx-auto" md={12} style={{position:'relative',top:'-30px'}}>

          <div className='text-white my-3 mx-auto rounded bg-danger w-50' style={{display:error?'':'none'}}> <i>{error}</i> </div>

            <Form id='form' onSubmit={handleSubmit} className="w-75 m-auto">
              <InputGroup className="mb-3 shadow">
                <FormControl
                  type='text'
                  className="border border-dark"
                  placeholder="Username"
                  value={username}
                  onChange={ e => setUsername(e.target.value) }
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  required
                />
                <FormControl
                  type='password'
                  className="border border-dark"
                  value={password}
                  onChange={ e => setPassword(e.target.value) }
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  required
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
            </Form>

          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BandLogin;
