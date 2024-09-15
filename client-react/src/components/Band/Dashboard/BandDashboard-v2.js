import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import cookies from 'cookiesjs';
import {Phone} from 'styled-icons/feather/Phone'
import {Contacts} from 'styled-icons/remix-line/Contacts';
import {PriceTag} from 'styled-icons/icomoon/PriceTag'
import {DocumentText} from 'styled-icons/typicons/DocumentText';
import {FacebookBox} from 'styled-icons/remix-line/FacebookBox';
import {Instagram} from 'styled-icons/remix-line/Instagram';
import {Twitter} from 'styled-icons/remix-fill/Twitter';

import './BandDashboard.css'

import DashboardHeader from './BandDashboardHeader';
import Footer from '../../Footer/Footer';


const axios = require('axios');


const BandDashboard = () => {
   let history = useHistory();
   let user = '';

   //state
   const [zipcode, setZipCode] = useState('');
   const [contactPerson, setContactPerson] = useState('');
   const [contactPersonPhoneNumber, setContactPersonPhoneNumber] = useState('');
   const [bandName, setBandName] = useState('');
   const [genre, setGenre] = useState('');
   const [bio, setBio] = useState('');
   const [price,setPrice] = useState('');
   const [myWebsite, setMyWebsite] = useState('');
   const [facebook, setFacebook] = useState('');
   const [instagram, setInstgram] = useState('');
   const [twitter, setTwitter] = useState('');
   const [postData, setPostData] = useState('');


   const [id, setId] = useState('');
   const [userName, setProfileName] = useState(null);
   const [userDetails, setUserDetails] = useState([]);
   const [login, setLogin] = useState(false);

   const getCookie = name => cookies(name)?cookies(name):history.push('/');

   const verifyUser = props => {

      //check if user has the cookie
      const jwtCookie = getCookie('jwt');
      
      //if cookie is false, route back home
      if( !jwtCookie ){
         history.push('/')
      }

      //verify if the cookie matches
      const areYouVerified = axios.post('http://localhost:3001/verify', {
         token: jwtCookie
      });

      areYouVerified.then(user => {
        
          // user.data
         if( !user.data.verified ){
            console.log("NOT VERIFIED")
            console.log(user.data)
            history.push('/')
         }

         if( user.data.verified && user.data.accountType !== 'Client'){
            
            console.log('Not Authorized')
            
            //route back to venue-dashboard
            history.push('/venue-profile')
         
         }else{

            console.log('VERIFIED');
            user = user.data;
            setProfileName(user.username);
            setLogin(true);
            setId(user.userid)
            
         }
         userDetails.push( user );
      });
         
      
   }

   useEffect( () => {
      verifyUser(); 
   }, []);

   const getSettings = () => {
      console.log( user )
      if( !id ){
         return 
      }

      const url = `http://localhost:3001/band-settings/${id}`
      
      axios.get( url )
      .then(response => {
          const band = response.data.settings;

          console.log('get-settings: ',response.data)
          
          if( !response.data.message[1] ){
            history.push('/band-settings');
          }

          setZipCode(band.ZipCode)
          setContactPerson(band.ContactPerson);
          setContactPersonPhoneNumber(band.ContactPersonPhoneNumber)
          setBandName(band.Name);
          setGenre(band.Genre);
          setBio(band.Bio);
          setPrice(band.Price);
          //external Links
          setMyWebsite(band.PersonalWebsite);
          setFacebook(band.Facebook);
          setInstgram(band.Instagram);
          setTwitter(band.Twitter);

          console.log(`
          
            First Time Login'
            
         `, band.FirstTimeLogin )

      })
      .catch(error => {
         console.log('ERROR - Settings has not been setup. Routing to settings for setup => ', error )
         // history.push('/band-settings');
   })
   }

   const handleSubmit = e => {
      e.preventDefault();
      console.log('USER: ',user)
      const url  = `http://localhost:3001/post/postID/${id}`;

      axios.post( url, {
         postData: postData,
         FirstName: 'Nate',
         LastName: 'Corbitt' 
      })
      .then( response => {
         console.log( response )
      })

      console.log(`
         POST:
         ${postData}
      `)
   }


   useEffect( () => getSettings() ,[id]) //will update the DOM only when the id changes or update
   useEffect( () => verifyUser() ,[]); // will update the DOM once

  return (
      <section>
         <DashboardHeader userData={userDetails} username={userName} />

         <Container style={{fontFamily:'Big Shoulder Text'}}>
         <h1 className='ml-2' 
            style={{
                marginTop:150,
                fontSize:'5em', 
                textShadow:'3px 3px 1px white', 
                fontFamily:'Big Shoulders Text',
                textAlign:'left'
            }}>
                    {bandName}
        </h1>
         <Row id='picture-container' className='h-100'>
            <Col className='' >
                <div id='band-picture'></div>
            </Col>
         </Row>

         <Row> 
             <Col className='mt-5'>
                <section className='mx-auto'>
                     <h1 className='' id='col-text'>
                        Band Information
                     </h1>
                     <article className='w-75 mx-auto'>
                        <h3></h3>
                     </article> 
                     {/* <hr className='my-5'/> */}
                </section>
             </Col>
         </Row>
         
         {/* bio */}
         <Row> 
             <Col className='mt-5'> <hr />
                <section className=''>
                     <h1 className='text-secondary' id='col-text' style={{fontSize:'3em'}}>
                        <DocumentText className='mx-3' style={{marginTop:'-15px'}}  size='48'/> 
                        
                        Bio
                     
                     </h1>
                     <article className='w-75 mx-auto my-5'>
                        <h3>

                           { bio }
                           
                        </h3>
                     </article> <hr/>
                </section>
             </Col>
         </Row>
         
         {/*  */}
         <Row>
            <Col>
            <h1 className='text-secondary ml-2 mb-3' id='col-text'>
               <PriceTag className='text-success mx-3' style={{marginTop:'-15px'}}  size='48'/> 
               
               Our price
            
            </h1> 
            <h3 className='ml-3 text-success' style={{fontSize:'5em', textShadow:'3px 1px 3px grey'}}>${price}</h3>
            <hr/>

            <h1 className='text-secondary ml-2 mb-3' id='col-text'>
               <Contacts className='mx-3' style={{marginTop:'-15px'}}  size='48'/>
               
               Contact Person
           
            </h1>
               
               Name 
               <h3 className='ml-3' style={{fontSize:'5em'}}>{contactPerson} </h3>
               
               Phone#
               <h3 className='text-secondary ml-3' style={{fontSize:'2em'}} ><span> <Phone size='24'/> </span> {contactPersonPhoneNumber}</h3>
            
            <hr className='my-5'/>
            </Col>
         </Row>
         <Row><Col>
         <h1 
            id='col-text'
            className='ml-2 mb-5 text-secondary'
            style={{display: !myWebsite&&!facebook&&!instagram&&!twitter?'none':''}}
         >
            
            Check us out 
            
         </h1></Col></Row>
         <Row className='mb-5'>            

               <Col>
                  <div style={{display: !myWebsite?'none':''}}>
                     {/* <h4 className='text-left ml-5'>Personal Website</h4> */}
                     <h3 className=''><a href={myWebsite} target='_blank'>Personal Website</a></h3>
                  </div> <hr />
            </Col>
            <Col>
               <div style={{display: !facebook?'none':''}}>
                  {/* <h4 className='text-left ml-5'>Facebook</h4> */}
                  <h3 className=''>
                    
                     <a href={facebook} target='_blank'>
                        <FacebookBox className='text-primary' style={{marginTop:'-15px'}}  size='48'/>
                     </a>
                  </h3> 
               </div> <hr />
            </Col>
            <Col>
               <div style={{display: !instagram?'none':''}}>
                  {/* <h4 className='text-left ml-5'>Instagram</h4> */}
                  <h3 className=''>
                     
                     <a href={instagram} target='_blank'>
                        <Instagram className='text-dark' style={{marginTop:'-15px'}}  size='48'/>
                     </a>
                  </h3> 
               </div> <hr />
            </Col>
            <Col>
               
               <div style={{display: !twitter?'none':''}}>
                  {/* <h4 className='text-left ml-5'>Twitter</h4> */}
                  <h3 className=''>
                     <a href={twitter} target='_blank'>
                        <Twitter className='text-primary' style={{marginTop:'-15px'}}  size='48'/>      
                     </a>
                  </h3> 
               </div> <hr />


            </Col>
         </Row>

         {/* POST INPUT - POST WILL BE SEND TO POST ROUTE */}
         {/* <Row className='m-5'>
            <Col>
               <div>
               <Form onSubmit={handleSubmit}>
               <InputGroup>
                  <InputGroup.Prepend>
                     <InputGroup.Text>With textarea</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                     value={postData}
                     onChange={ e => {
                        console.log('Event: ', e);
                        setPostData( e.target.value );
                     }} 
                     as="textarea" 
                     aria-label="With textarea" 
                  />
                    <InputGroup.Append>
                    <Button type='submit'>Post</Button>
                  </InputGroup.Append>
               </InputGroup>
               </Form>
               </div>
              
            </Col>
         </Row> * Post Input */}


         </Container>
         {/* <Footer /> */}
      </section>
         )
}
     
export default BandDashboard;





