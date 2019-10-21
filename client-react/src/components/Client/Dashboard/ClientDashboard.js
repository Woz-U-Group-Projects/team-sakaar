import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Figure, InputGroup, FormControl } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import { EditAlt } from 'styled-icons/boxicons-solid/EditAlt';

import './ClientDashboard.css'

import DashboardHeader from './DashboardHeader';


const ClientDashboard = () => {
   let { name } = useParams();

   const [profileName, setProfileName] = useState( name );
   useEffect( () => {

   })



   return (
      <div>
         <DashboardHeader />
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
                              <h4>{profileName}</h4>
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
     
export default ClientDashboard;