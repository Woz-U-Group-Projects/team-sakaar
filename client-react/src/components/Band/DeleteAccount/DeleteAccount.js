
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import cookies from 'cookiesjs';

import './DeleteAccount.css';

import {
  Container,
  Row,
  Col,
  FormControl,
  InputGroup,
  Button,
  Form,
  Alert
} from "react-bootstrap";
import BandHeaderDashboardHeader from "../Dashboard/BandDashboardHeader"
import Footer from "../../Footer/Footer";


function DeleteAccount( ) {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [decison, setDecison] = useState('');

    useEffect( () => {
        handleDecison()
    },[decison] )

    const  deleteJWTCookie = () => cookies({ jwt: ''}, { expires: new Date(0) });

    function handleDecison( ){
   
        if( decison === 'cancel'){
            // history.goBack();
            return false;
        }

        if( decison === 'delete'){
            alert('Deleting account!');
            deleteJWTCookie();
            history.push('/');
        }
    }

    return (
        <div>
            <BandHeaderDashboardHeader />
            <Container className='' >
                <Alert variant='danger' show={show}>
                    <Alert.Heading style={{fontSize:'2.5em', fontWeight:'bold'}}> Account Deletor </Alert.Heading>
                    <p>Are you sure you want to to delete your account?</p>
                    <hr />
                    <Button variant='outline-info mr-5' 
                        onClick={ () => {
                            setDecison('cancel');
                            setShow(false)
                        }}
                    >Cancel
                    </Button>
                    
                    <Button variant='outline-danger'
                            onClick={ () => { 
                                setDecison('delete');
                                setShow(false);
                            }}
                    >Delete
                    </Button>
                </Alert>

                <Row className='' >
                    <Col className='bg-dark p-4' style={{background: 'linear-gradient(45deg, purple, orange)'}}>
                        <main className='border rounded bg-info'>

                                <div id='delete-account-container' className='bg-danger text-white' style={{marginTop:200}}>
                                    <h1 className='py-3'>Delete Account</h1>
                                    <p className='' >It makes us really sad to see you leave, but we understand, Later Allegator!</p>
                                    <Button variant='danger'className='mb-3 w-25' size='lg' onClick={()=> {
                                        setShow(true);
                                    }}>Delete</Button>
                                </div>

                        </main>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )

};

export default DeleteAccount