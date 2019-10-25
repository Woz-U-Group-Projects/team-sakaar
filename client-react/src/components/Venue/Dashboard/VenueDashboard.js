import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Figure  } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import cookies from 'cookiesjs';

import styled from 'styled-components';
import { EditAlt } from 'styled-icons/boxicons-solid/EditAlt';

import './VenueDashboard.css'

import VenueDashboardHeader from './VenueDashboardHeader';
const axios = require('axios');


const VenueDashboard = () => {
   let location = useLocation();
   let history = useHistory();
   let user = '';

   //state
   const [userName, setProfileName] = useState('');



   const getCookie = name => {

      if( cookies(name) ){
      
         return cookies(name)
      
      }else {

         history.push('/')
      }
         

   }

   const verifyUser = props => {
     const jwtToken = getCookie('jwt');

      //verify if user has the cookie
      const areYouVerified = axios.post('http://localhost:3001/verify', {
         token: jwtToken
      });

      areYouVerified.then(user => {
         // user.data

         if( !user.data.verified ){
            console.log("NOT VERIFIED")
            history.push('/')
         }else{
            console.log('VERIFIED');
            user = user.data;
            setProfileName(user.username)
         }

      });
   }

  
   useEffect( () => {
      verifyUser();
   })



   return (
      <div>
         <VenueDashboardHeader username={userName} />
         <div id='profile-container'>
            <Figure className='float-left ml-5 mt-5'>
               <Figure.Image
                  width={400}
                  height={300}
                  alt="171x180"
                  src="https://www.nationalgeographic.com/content/dam/news/photos/000/795/79574.jpg"
                  thumbnail
               />
               <Figure.Caption id='profile-picture' className='w-100 mt-3'>
                     <Container>
                        <Row>
                           <Col sm={10} md={10}>
                              <h4>{userName}</h4>
                           </Col>
                           <Col sm={2} md={2}>

                              <span id='profile-edit' className=''>
                                 <EditAlt id='icon' size='18' title='edit name' />
                              </span>

                           </Col>
                        </Row>
                     </Container>
               </Figure.Caption>
            </Figure>
         </div>

         <section id='news-feed'>
         </section>
      </div>
         )
     }
     
export default VenueDashboard;