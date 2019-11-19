import React, { useState, useEffect } from 'react';
import DashboardHeader from './VenueDashboardHeader';
import {useHistory} from 'react-router-dom';
import { Container, Row, Col , InputGroup, FormControl, Button, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'cookiesjs';
import VenueDashboard from './VenueDashboard';

const VenueSettings = () => {

    const history = useHistory();
    
    //state
    const [contactPerson, setContactPerson] = useState('');
    const [venueName, setVenueName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstTimeLogin, setFirstTimeLogin] = useState('');

    useEffect( () => {
        console.log(`
        
            contact person: ${contactPerson}
            venue name: ${venueName}
            address: ${address}
            phone #: ${phoneNumber}
            first time logon: ${firstTimeLogin}
        `)
    })
  

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

    const getCookie = name => cookies(name)?cookies(name):history.push('/');

    const [user, setUser] = useState('');
    const [userID, setUserID] = useState();
    const verifyUser = props => {
        console.log(`
            VERIFING..

        `)
        //check if user has the cookie
        const jwtCookie = getCookie('jwt');
        
        //if cookie is false, route back home
        if( !jwtCookie ){
           history.push('/')
        }
  
        //verify if the cookie matches
        axios.post('http://localhost:3001/verify', {
           token: jwtCookie
        })
        .then( user => {
          
            // user.data
           if( !user.data.verified ){
              history.push('/')
           }
              setUser( user.data )
              setUserID( user.data.userid )
              setFirstTimeLogin( user.data.firstTimeLogin)
          
        });
    }
    const submitSettings = e => {

        // prevents to screen from refreshing when submitting
        e.preventDefault();

        console.log('SUBMIT_SETTINGS')
        let url = `http://localhost:3001/venue-submit-settings/${userID}`;
        axios.post( url, {
            Name: venueName,
            Address: address,
            ContactPerson: contactPerson,
            PhoneNumber: phoneNumber,
            FirstTimeLogin: false
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

    const saveSettings = e => {
        e.preventDefault();

        console.log(`
        
            Saving...
        `)
        
        let url = `http://localhost:3001/venue-save-settings/${userID}`;
        axios.post( url, {
            Name: venueName,
            Address: address,
            ContactPerson: contactPerson,
            PhoneNumber: phoneNumber,
        })
        .then( response => {

            console.log(`
                RESPONSE
                ${JSON.stringify(response)}
            `)
            
            if( response.data.status === 201 ){
                console.log("RESPONSE: 201")
                setShow201(true);

                //scroll back to the top of screen
                document.documentElement.scrollTop = 0
            }

            if( response.data.status === 401 ){
                console.log("RESPONSE: 401")
                setShow401(true);
            }
        })
            
    }

    function getSettings(){

        console.log(`

            GET SETTINGS
        `)

       // without checking to make sure the userID had a value, it was making a call to the DB
       // creating an error. Trying to lookup a user with no value( userID = 0 );    
       if( !userID ){
           return 
       }
        
        const url = `http://localhost:3001/venue-settings/${userID}`
       
        axios.get( url )
            .then(response => {
                const Venue = response.data.settings;
                setVenueName(Venue.Name);
                setAddress(Venue.Address);
                setContactPerson(Venue.ContactPerson);
                setPhoneNumber(Venue.PhoneNumber);
                setFirstTimeLogin(Venue.FirstTimeLogin)  
            })
            .catch(error => console.log('ERROR => ',error))

    }

      useEffect( () => {
        verifyUser();
      },[])

      useEffect( () => {
        getSettings()
      },
        // When we get the user id, then call getSettings or update the UI
        [userID]
      ) 

    return (
        <section>
            <DashboardHeader username={user.username}/>
            <Container style={{fontFamily:'Big Shoulders Text'}}>
                <Row>
                    <Form className='w-100'>
                    <Col className='' style={{marginTop:80}}>
                        
                    {/* //Alert  */}
                    <div>{ show201 && alert201() } { show401 && alert401() } </div>

                    <h1 className='mt-5 mb-5 bg-light py-3'> Settings </h1>
                
                    <section className='bg-light text-dark py-5 mb-5' style={{fontFamily:'Big Shoulders Text'}}>

                    <h4 className='mt-5 mb-3'> Name </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="contact-person">Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={venueName}
                            onChange={ e => setVenueName( e.target.value )}
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

                            <Button
                                size='lg' 
                                type='submit' 
                                className='mt-3 w-50' 
                                onClick={firstTimeLogin?submitSettings:saveSettings}
                            > 
                                {firstTimeLogin?'Submit':'Save'} 
                            
                            </Button>

                    </section>
                    </Col>
                </Form>
                </Row>
            </Container>
        </section>
    )
};

export default VenueSettings;
