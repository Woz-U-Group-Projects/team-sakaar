import React, { useState, useEffect } from 'react';
import DashboardHeader from './BandDashboardHeader';
import {useLocation, useHistory} from 'react-router-dom';
import { Container, Row, Col , InputGroup, FormControl, Button, Alert, Form } from 'react-bootstrap';
import axios from 'axios';
import cookies from 'cookiesjs';


const Settings = () => {

    const history = useHistory();


    
    const [zipcode, setZipCode] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactPersonPhoneNumber, setContactPersonPhoneNumber] = useState('');
    const [bandName, setBandName] = useState('');
    const [genre, setGenre] = useState('');
    const [bio, setBio] = useState('');
    const [price,setPrice] = useState(0);
    const [myWebsite, setMyWebsite] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstgram] = useState('');
    const [twitter, setTwitter] = useState('');
    const [firstTimeLogin, setFirstTimeLogin] = useState('');

    //useEffect( () => console.log('Contact Person#: ', contactPersonPhoneNumber),[contactPersonPhoneNumber])
  

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
                            <Button variant='primary' className='' onClick={ () => history.push('/band-profile')}> Back </Button>
                            <Button variant='success' className='' onClick={()=> setShow201(false) }>Close</Button>

                        </p>
                    </Alert> 
        }
        
    }

    const [show401, setShow401] = useState(false);
    const alert401 = () => {

        setTimeout( () => setShow401(false),3000 )
        
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

    const [user, setUser] = useState('')
    const [userID, setUserID] = useState();
    const verifyUser = props => {

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

        e.preventDefault();

        let url = `http://localhost:3001/submit-settings/${userID}`;
        axios.post( url, {
            ZipCode:       zipcode,
            Name:          bandName,
            ContactPerson: contactPerson,
            ContactPersonPhoneNumber: contactPersonPhoneNumber, 
            Genre:           genre,
            zipcode:         zipcode,
            Bio:             bio,
            Price:           price,
            PersonalWebsite: myWebsite,
            Facebook:        facebook,
            Instagram:       instagram,
            Twitter:         twitter,
            FirstTimeLogin:  false
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

            document.documentElement.scrollTop = 0
        })
    }

    const saveSettings = e => {
        e.preventDefault()
        
        let url = `http://localhost:3001/save-settings/${userID}`;
        axios.put( url, {
            ZipCode: zipcode,
            Name: bandName,
            ContactPerson: contactPerson,
            ContactPersonPhoneNumber: contactPersonPhoneNumber,
            Genre: genre,
            zipcode: zipcode,
            Bio: bio,
            Price: price,
            PersonalWebsite: myWebsite,
            Facebook: facebook,
            Instagram: instagram,
            Twitter: twitter,
        })
        .then( response => {

            
            if( response.data.status === 201 ){
                console.log("RESPONSE: 201")
                setShow201(true);

                document.documentElement.scrollTop = 0

            }

            if( response.data.status === 401 ){
                console.log("RESPONSE: 401")
                setShow401(true);
            }
        })
            
    }

    const getSettings = () => {

       // without checking to make sure the userID had a value, it was making a call to the DB
       // creating an error. Trying to lookup a user with no value( userID = 0 );    
       if( !userID ){
        return 
    }
        
        const url = `http://localhost:3001/band-settings/${userID}`;
        
        axios.get( url )
            .then(response => {
                const band = response.data.settings;

                console.log('get-settings: ',response.data)
                setZipCode(band.ZipCode)
                setContactPerson(band.ContactPerson);
                setContactPersonPhoneNumber(band.ContactPersonPhoneNumber);
                setBandName(band.Name);
                setGenre(band.Genre);
                setBio(band.Bio);
                setPrice(band.Price);
                //external Links
                setMyWebsite(band.PersonalWebsite);
                setFacebook(band.Facebook);
                setInstgram(band.Instagram);
                setTwitter(band.Twitter);
                setFirstTimeLogin(band.FirstTimeLogin)
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
                    <div id='alert'> { show201 && alert201() } { show401 && alert401() } </div>

                    <h1 className='mt-5 mb-5 bg-light py-3'> Settings </h1>
                
                    <section className='bg-light text-dark py-5 mb-5' style={{fontFamily:'Big Shoulders Text'}}>

                        <h4 className='mt-5 mb-3'> Zip Code </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="contact-person">Zip Code</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='number'
                            value={zipcode}
                            onChange={ e => {
                                if( e.target.value.length > 5 ){
                                    return ''
                                }

                                setZipCode( e.target.value )
                            }}
                            aria-label="Zip Code"
                            aria-describedby="Zip Code"
                            required
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
                                aria-label="Contact Person"
                                aria-describedby="Contact Person"
                                required
                                />
                        </InputGroup>

                        <h4 className='mt-5 mb-3'> Contact Person Phone Number</h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="contact-person">Phone Number</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type='text'
                                value={contactPersonPhoneNumber}
                                onChange={ e => setContactPersonPhoneNumber( e.target.value )}
                                aria-label="Contact Person Phone Number"
                                aria-describedby="Contact Person Phone Number"
                                required
                                />
                        </InputGroup>
                        
                        
                        <h4 className='mt-5 mb-3' > Band Name</h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>  
                            <InputGroup.Prepend>
                                <InputGroup.Text id="band-name">Band Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type='text'
                                value={bandName}
                                onChange={ e => setBandName( e.target.value )}
                                aria-label="Bandname"
                                aria-describedby="band-name"
                                required
                                />
                        </InputGroup>

                        
                        <h4 className='mt-5 mb-3' > Genre </h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="genre"> Genre </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type='text'
                            value={genre}
                            onChange={ e => setGenre( e.target.value )}
                            placeholder="Genre"
                            aria-label="Genre"
                            aria-describedby="Genre"
                            required
                            />
                        </InputGroup>


                        <h4 className='mt-5 mb-3'>Your Bio</h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Who you are</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type='text' 
                                value={bio}
                                onChange={ e => setBio( e.target.value )}
                                as="textarea" 
                                aria-label="With textarea" 
                                style={{height:300,resize:'none'}}
                                required
                            />
                        </InputGroup>
                        
                        <h4 className='mt-5 mb-3'>Price</h4>
                        <InputGroup className='w-50 mx-auto border border-dark rounded'>
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                                <FormControl
                                    type='number'
                                    value={price}
                                    onChange={ e => setPrice( e.target.value )} 
                                    aria-label="Amount (to the nearest dollar)"
                                    required 
                                />
                            <InputGroup.Append>
                            <InputGroup.Text>.00</InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                            <hr  className='my-5'/>

                            <section id='external-links'>
                                <h4 className='mt-5 mb-5'>External Links</h4>

                                <h5 className='mt-5' style={{fontSize:'1em'}}> Personal Website </h5>
                                <InputGroup className='w-50 mx-auto border border-dark rounded'>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text> My Website </InputGroup.Text>   
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type='text'
                                        value={myWebsite}
                                        onChange={ e => setMyWebsite( e.target.value )} 
                                    />
                                </InputGroup>

                                <h5 className='mt-5' style={{fontSize:'1em'}}>Facebook</h5>

                                <InputGroup className='w-50 mx-auto border border-dark rounded'>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text> Facebook </InputGroup.Text>   
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type='text'
                                        value={facebook}
                                        onChange={ e => setFacebook( e.target.value )}
                                    />
                                </InputGroup>

                                <h5 className='mt-5' style={{fontSize:'1em'}}>Instagram</h5>
                                <InputGroup className='w-50 mx-auto border border-dark rounded mb-5'>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text> Instagram </InputGroup.Text>   
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type='text'
                                        value={instagram}
                                        onChange={ e => setInstgram( e.target.value )} 
                                        // required
                                    />
                                </InputGroup>

                                <h5 className='mt-5' style={{fontSize:'1em'}}>Twitter</h5>
                                <InputGroup className='w-50 mx-auto border border-dark rounded mb-5'>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text> Twitter </InputGroup.Text>   
                                    </InputGroup.Prepend>
                                    <FormControl
                                        type='text'
                                        value={twitter}
                                        onChange={ e => setTwitter( e.target.value )} 
                                        aria-label=""
                                        // required
                                    />
                                </InputGroup>

                               
                            </section> <hr />

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

export default Settings;
