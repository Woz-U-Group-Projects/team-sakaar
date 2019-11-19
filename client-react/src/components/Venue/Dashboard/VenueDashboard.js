import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import cookies from 'cookiesjs';

import './VenueDashboard.css'

import VenueDashboardHeader from './VenueDashboardHeader';
const axios = require('axios');


const VenueDashboard = () => {
   let history = useHistory();
   let user = '';

   //state 
   const [contactPerson, setContactPerson] = useState('');
   const [name, setName] = useState('');
   const [address, setAddress] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

   const [id, setId] = useState('');
   const [userName, setProfileName] = useState(null);
   const [userDetails, setUserDetails] = useState([]);
   const [login, setLogin] = useState(false);

   const getCookie = name => cookies(name)?cookies(name):history.push('/');

   const verifyUser = props => {

      //check if user has the cookie
      const jwtCookie = getCookie('jwt');
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
            history.push('/')
         }

         if( user.data.verified && user.data.accountType !== 'Venue'){
            
            console.log('Not Authorized')
            
            //route back to venue-dashboard
            history.push('/band-profile')
         
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

   const getSettings = () => {

      if( !id ){
         return 
      }

      const url = `http://localhost:3001/venue-settings/${id}`
      
      axios.get( url )
      .then(response => {
          const venue = response.data.settings;
          setContactPerson(venue.ContactPerson);
          setName(venue.Name);
          setAddress(venue.Address);
          setPhoneNumber(venue.PhoneNumber)
      
      })
      .catch(error => {
            /** 
             * The getSettings will try to get retrieve the data if something is there. 
             * If Nothing is their, we will get this error meaning, setup, has not 
             * been performed, so we will router the user there.
            */
            console.log('ERROR - Settings has not been setup. Routing to settings for setup => ', error )
            history.push('/venue-settings')
      })

}

  useEffect( () => getSettings() ,[id]) //will update the DOM only when the id changes or update
  useEffect( () => verifyUser() ,[]); // will update the DOM once
   

   return (
      <section>
         <VenueDashboardHeader userData={userDetails} username={userName} />
         <Container style={{fontFamily:'Big Shoulder Text'}}>
         <h1 className='ml-2' 
            style={{
                marginTop:250,
                fontSize:'5em', 
                textShadow:'3px 3px 1px white', 
                fontFamily:'Big Shoulders Text',
                textAlign:'left'
            }}>
                    {name}
        </h1>
         <Row id='picture-container' className='h-100'>
            <Col className='' >
                <div id='band-picture'></div>
            </Col>
         </Row>
         
         {/* bio */}
         <Row> 
             <Col className='mt-5'>
                <section className='mx-auto'>
                     <h1 className='' id='col-text'>
                        Venue Information
                     </h1>
                     <article className='w-75 mx-auto'>
                        <h3>{}</h3>
                     </article> <hr className='my-5'/>
                </section>
             </Col>
         </Row>
         
         {/*  */}
         <Row>
            <Col>
            <h1 className='ml-2 mb-3' id='col-text'>Contact Person </h1> 
               Name <h4 className='ml-3' style={{fontSize:'5em'}}>{contactPerson}</h4>
               Phone# <h4 className='ml-3 text-secondary' style={{fontSize:'2em'}}>{phoneNumber}</h4>
            <hr className='my-5'/>
            <h1 className='ml-2 mb-3' id='col-text'>Address </h1> 
            <h4 className='ml-3' style={{fontSize:'2em'}}>{address}</h4>
            <hr className='my-5' />
            
            </Col>
         </Row>
         </Container>

      </section>
   )
}
     
export default VenueDashboard;





