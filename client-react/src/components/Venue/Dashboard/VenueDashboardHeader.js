import React, { useState, useEffect } from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";



const VenueDashboardHeader = ({ userData, username }) => {

   const history = useHistory();


   const handleSettings = () => {
      console.log('HANDLE SETTINGS')
      console.log('USER', userData)
      console.log('USERNAME', username)

      history.push('/venue-settings', {user:userData} )
   }
   
   return(
        <div>
           <Navbar className='' bg="light" expand="lg" fixed='top'>
               <Navbar.Brand href={`/venue-profile`}>Venue Dashboard</Navbar.Brand>
               <div className='w-100'>
                  <Navbar.Text  className='' style={{fontSize:'1.5em'}}>Welcome <a href='/venue-profile'>{username}</a></Navbar.Text>
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
        </div>
    )


}

export default VenuDashboardHeader;
