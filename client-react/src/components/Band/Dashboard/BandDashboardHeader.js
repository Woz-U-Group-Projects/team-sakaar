import React from 'react';
import {useLocation, useHistory, useRouteMatch} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";

import {Note} from 'styled-icons/octicons/Note'
 

const BandDashboardHeader = ({ userData, username }) => {

   const location = useLocation();
   const history = useHistory();
   const m = useRouteMatch("/news-feed"); 

   const handleSettings = () => {

      history.push('/band-settings', {user:userData[0]} )
   }


   return(
        <div>
           <Navbar className='' bg="light" expand="lg" fixed='top'>
               <Navbar.Brand href={`/band-profile`}>Band Dashboard</Navbar.Brand>
               <div className='w-100'>
                  <Navbar.Text  className='' style={{fontSize:'1.5em'}}>Welcome <a href='/band-profile'>{username}</a></Navbar.Text>
               </div>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                  <Nav className="">
                     <Nav.Link href="/logout">Logout</Nav.Link>
                     <NavDropdown title="Settings" id="basic-nav-dropdown" className=''>
                        <NavDropdown.Item onClick={handleSettings}>Settings</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>
            
          
            <header id='news-feed' className='' style={{
             
               backgroundColor:'black',
               marginTop:70,
               visibility: m?'hidden':'',
               padding: 7
            }}
            >
               <Container>
                  <Row>
                     <Col className='d-flex justify-content-end'>

                        <Link to='/news-feed' className='text-light' >

                           <span 
                              className='bg-danger text-white border border-white' 
                              style={{ 
                                 position: 'relative',
                                 left:85,
                                 top: '-12px',
                                 padding: '5px 10px',
                                 borderRadius:3,
                                 zIndex:9
                              }}
                           >
                              5
                           </span>

                           <Note 
                              className='mx-3 text-light' 
                              style={{marginTop:'0px', zIndex:100}}  
                              size='48' 
                              title='post'
                           /> 
                     
                        </Link>
                     </Col>
                  </Row>
             
               </Container>
            </header> 
            
        </div>
    )

}


export default BandDashboardHeader;


