import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import cookies from 'cookiesjs';

import './VenueDashboard.css'

import DashboardHeader from './VenueDashboardHeader';
const axios = require('axios');


const VenueDashboard = () => {
   let history = useHistory();
   let user = '';

   //state
   const [zipcode, setZipCode] = useState('');
   const [contactPerson, setContactPerson] = useState('');
   const [bandName, setBandName] = useState('');
   const [genre, setGenre] = useState('');
   const [bio, setBio] = useState('');
   const [price,setPrice] = useState('');
   const [myWebsite, setMyWebsite] = useState('');
   const [facebook, setFacebook] = useState('');
   const [instagram, setInstgram] = useState('');


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

      const url = `http://localhost:3001/venue-settings/${id}`
      
      axios.get( url )
      .then(response => {
          const venue = response.data.settings;

          console.log('get-settings: ',response.data)
          setZipCode(venue.ZipCode)
          setContactPerson(venue.ContactPerson);
          setBandName(venue.Name);
          setGenre(venue.Genre);
          setBio(venue.Bio);
          setPrice(venue.Price);
          //external Links
          setMyWebsite(venue.PersonalWebsite);
          setFacebook(venue.Facebook);
          setInstgram(venue.Instagram);
      })
      .catch(error => console.log('ERROR => ',error))

}

  useEffect( () => {
   getSettings()
  },[id])
  
   useEffect( () => {
      verifyUser(); 
   }, []);
   

   return (
      <section>
         <DashboardHeader userData={userDetails} username={userName} />
         <Container style={{fontFamily:'Big Shoulder Text'}}>
         <h1 className='ml-2' 
            style={{
                marginTop:250,
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
         
         {/* bio */}
         <Row> 
             <Col className='mt-5'>
                <section className='mx-auto'>
                     <h1 className='' id='col-text'>
                        Venue Information
                     </h1><hr/>
                     <article className='w-75 mx-auto'>
                        <h3>{bio}</h3>
                     </article>
                </section>
             </Col>
         </Row>
         
         {/*  */}
         <Row>
            <Col>
            <h1 className='ml-2 mb-3' id='col-text'>Our price </h1> 
               <h4 className='text-center ml-3' style={{fontSize:'5em'}}>${price}</h4>
            <hr/>
            <h1 className='ml-2 mb-3' id='col-text'>Contact Person </h1>
               <h4 className='ml-3' style={{fontSize:'5em'}}>{contactPerson}</h4>
            <hr/>
            </Col>
         </Row>
         
         <Row className='mb-5'>
            <Col>
            <h1 className='ml-2' id='col-text'>Check us out </h1> <hr />
            <h4 className='text-left ml-5'>Personal Website: <a href={myWebsite}>{myWebsite}</a> </h4>
            <h4 className='text-left ml-5'>Facebook: <a href={facebook}>{facebook}</a> </h4>
            <h4 className='text-left ml-5'>Instagram: <a href={instagram}>{instagram}</a> </h4>
            

            </Col>
         </Row>
         </Container>

      </section>
         )
}
     
export default VenueDashboard;





