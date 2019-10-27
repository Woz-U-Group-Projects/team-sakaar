<<<<<<< HEAD:client-react/src/components/Client/Dashboard/DashboardHeader.js
import React from "react";

const anchorStyles = {
  color: "slategray",
  fontSize: "1.5em",
  marginRight: 15,
  textDecoration: "none"
};

const titleStyles = {
  fontSize: "2em"
};

const secondary = {
  fontSize: ".5em",
  marginRight: 3
};

function AchorEnter(e) {
  e.target.style.color = "black";
}

function AnchorLeave(e) {
  e.target.style.color = "slategray";
}

function Header() {
  return (
    <div>
      <header className="p-3 pb-5 col-xs-12" style={{ height: "64px" }}>
        <a id="title-wrapper" href="/#" className="" style={{ color: "black" }}>
          <span id="title" className="float-left" style={titleStyles}>
            O
            <span id="secondary" style={secondary}>
              N
            </span>
            D
            <span id="secondary" style={secondary}>
              EMAND
            </span>
            B
            <span id="secondary" style={secondary}>
              ANDS
            </span>
          </span>
        </a>
        <span id="login-signup col-xs-12" className="float-right">

          <a
            href="/signedout"
            style={anchorStyles}
            onMouseEnter={AchorEnter}
            onMouseLeave={AnchorLeave}
          >
            Signout
          </a>{" "}

          

          
        </span>
      </header>
    </div>
  );
}

export default Header;
=======
import React, { useState, useEffect } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';

const VenuDashboardHeader = ({ username, loggedin }) => {
   const [settings, setSetting] = useState({
      
   });



   return(
        <div>
           <Navbar className='' bg="light" expand="lg" fixed='top'>
               <Navbar.Brand href={`/venue-dashboard`}>Venue Dashboard</Navbar.Brand>
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
>>>>>>> Nate-Frontend:client-react/src/components/Venue/Dashboard/VenueDashboardHeader.js
