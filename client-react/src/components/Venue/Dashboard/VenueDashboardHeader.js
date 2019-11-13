import React, { useState, useEffect } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

import Newsfeed from '../../../components/Band/Dashboard/Newsfeed';

const VenuDashboardHeader = ({ username, loggedin }) => {
   const [settings, setSetting] = useState({
      
   });



   return(
        <div>
           <Navbar className='' bg="light" expand="lg" fixed='top'>
               <Navbar.Brand href={`/venue-dashboard`}>Client Dashboard</Navbar.Brand>
               <div className='w-100'>
                  <Navbar.Text  className='' style={{fontSize:'1.5em'}}>Welcome <a href='/venue-dashboard'>{username}</a></Navbar.Text>
               </div>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                  <Nav className="">
                     <Nav.Link href="/logout">Logout</Nav.Link>
                     <NavDropdown title="Settings" id="basic-nav-dropdown" className=''>
                        <NavDropdown.Item href="#seting1">Setting1</NavDropdown.Item>
                        <NavDropdown.Item href="#seting2">Setting2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#setting3">Setting3</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
         </Navbar> 
        </div>
    )
}

export default VenuDashboardHeader;
