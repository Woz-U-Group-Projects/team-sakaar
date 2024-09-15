import React, { useState, useEffect } from 'react';
import DashboardHeader from './VenueDashboardHeader';
import {useLocation, useHistory} from 'react-router-dom';
import { Container, Row, Col , InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const VenueSettings = () => {

    const history = useHistory();
    const currentUser = history.location.state.user[0];

    //state
    const [contactPerson, setContactPerson] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');



    const [show201, setShow201] = useState(false);
    const alert201 = () => {

        // setTimeout( () => setShow(false),3000 )
        
        if( show201 ){
            return <Alert show={show201} variant="success" className='border border-success'>
                        <Alert.Heading>Settings</Alert.Heading> <hr />
                        <h3>
                            The content has been updated
                        </h3>
                        <hr />
                        <p className="d-flex mb-0 w-25 mx-auto justify-content-around">
                            <Button variant='primary' className='' onClick={ () => history.goBack()}> Back </Button>
                            <Button variant='success' className='' onClick={()=> setShow201(false) }>Close</Button>

                        </p>
                    </Alert> 
        }
        
    }

    const [show401, setShow401] = useState(false);
    const alert401 = () => {

        // setTimeout( () => setShow401(false),3000 )
        
        if( show401 ){
            return <Alert show={show401} variant="danger" className='border border-danger'>
                        <Alert.Heading>Settings</Alert.Heading> <hr />
                        <h3>
                            The content has NOT been updated
                        </h3>
                        <hr />
                        <p className="d-flex mb-0 w-25 mx-auto justify-content-around">
                            <Button variant='danger' className='' onClick={()=> setShow401(false) }>Close</Button>
                        </p>
                    </Alert> 
        }
        
    }


    const saveSettings = () => {
        // const user = history.location.state.user;
        const id = currentUser.userid;
        
        let url = `http://localhost:3001/venue-save-settings/${id}`;
        axios.post( url, {
            Name: name,
            Address: address,
            ContactPerson: contactPerson,
            PhoneNumber: phoneNumber
        })
        .then( response => {
              
            
            if( response.data.status === 201 ){
                console.log("RESPONSE: 201")
                setShow201(true);
            }

            if( response.data.status === 401 ){
                console.log("RESPONSE: 401")
                setShow401(true);
            }
        })
    }

    const getSettings = () => {
        // const user = history.location.state.user;
        const id = currentUser.userid;
        const url = `http://localhost:3001/venue-settings/${id}`
        
        axios.get( url )
            .then(response => {
                const venue = response.data.settings;

                console.log('get-settings: ',response.data)
                setName(venue.Name)
                setAddress(venue.Address)
                setContactPerson(venue.ContactPerson);
                setPhoneNumber(venue.PhoneNumber)
                
            })
            .catch(error => console.log('ERROR => ',error))

    }
      useEffect( () => getSettings(),[])
      useEffect( () => {
        console.log(`
            
            ${name}
            ${address}
            ${contactPerson}
            ${phoneNumber}
        `)
      },[contactPerson, name, address, phoneNumber])
      useEffect( () => console.log('Current User Data: ', currentUser ))
      


    return (
        <section>
            <DashboardHeader userData={currentUser} username={currentUser.username}/>
            <Container style={{fontFamily:'Big Shoulders Text'}}>
                <Row>
                    <Col className='' style={{marginTop:80}}> 

                    <p>{ show201 && alert201() } { show401 && alert401() } </p>

                    <h1 className='mt-5 mb-5 bg-light py-3'>
                            Settings 
                            <Button 
                                className='btn-lg px-5' 
                                variant='outline-primary' 
                                style={{position:'fixed','marginLeft':550 }} 
                                onClick={saveSettings}> 
                            Save
                        </Button> 
                    </h1>
                    

                    <section className='bg-light text-dark py-5 mb-5' style={{fontFamily:'Big Shoulders Text'}}>

                        <h4 className='mt-5 mb-3'> Name </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="contact-person">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={name}
                            onChange={ e => setName( e.target.value )}
                            placeholder=""
                            aria-label="Zip Code"
                            aria-describedby="Zip Code"
                            />
                        </InputGroup>

                        <h4 className='mt-5 mb-3' > Address </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="band-name"> Address </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={address}
                            onChange={ e => setAddress( e.target.value )}
                            placeholder=""
                            aria-label="Address"
                            aria-describedby="Address"
                            />
                        </InputGroup>
                        
                        <h4 className='mt-5 mb-3'> Contact Person </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="contact-person">Contact Person</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={contactPerson}
                            onChange={ e => setContactPerson( e.target.value )}
                            placeholder=""
                            aria-label="Contact Person"
                            aria-describedby="Contact Person"
                            />
                        </InputGroup>
                        
                        <h4 className='mt-5 mb-3' > Phone Number </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="genre"> Phone Number </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={phoneNumber}
                            onChange={ e => setPhoneNumber( e.target.value )}
                            placeholder=""
                            aria-label="phone number"
                            aria-describedby="phone number"
                            />
                        </InputGroup>
                    </section>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default VenueSettings;
