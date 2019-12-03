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
import NewsFeed from './Newsfeed';


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
         <h1 className='ml-2 mb-3 ' 
            style={{
                marginTop:85,
                fontSize:'5em', 
                textShadow:'3px 3px 1px white', 
                fontFamily:'Big Shoulders Text',
                textAlign:'left'
            }}>
                    {bandName}
        </h1>

        <Row id='picture-container' className='h-100 w-100 mb-5'>
            <Col className='' >
                <div id='band-picture' className='rounded shadow'></div>
            </Col>
         </Row>

            <h3 className='text-left mb-3' style={{fontSize:'2em', fontWeight:100}}>Post</h3>
            <Row>
               <Col className='' style={{height:600, overflowX:'scroll', marginBottom:70}}>
                  <NewsFeed />
               </Col>
            </Row>



       


         </Container>
      </section>
         )
}
     
export default BandDashboard;





