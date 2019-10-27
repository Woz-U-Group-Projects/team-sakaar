import React, { useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap/";

import {useLocation} from 'react-router-dom';

const anchorStyles = {
  color: "slategray",
  fontSize: "1em",
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

    let location = useLocation();

  return (
    <header className="p-3 pb-5" style={{ height: "64px" }}>
      <a id="title-wrapper" href="/" className="" style={{ color: "black" }}>
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

      
      <span id="login-signup" className="float-right">
        <DropdownButton
          id="login-dropdown"
          title="Login"
          variant="secondary"
          className="float-left mr-2"
        >

          <Dropdown.Item
            href="/band-login"
            style={anchorStyles}
            onMouseEnter={AchorEnter}
            onMouseLeave={AnchorLeave}
          >
            Band Login
          </Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item
            href="/venue-login"
            style={anchorStyles}
            onMouseEnter={AchorEnter}
            onMouseLeave={AnchorLeave}
          >
<<<<<<< HEAD
            Musician
=======
            Venue Login
>>>>>>> Nate-Frontend
          </Dropdown.Item>
        </DropdownButton>

        <a
          href="/signup"
          className="btn btn-outline-warning"
          onMouseEnter={AchorEnter}
          onMouseLeave={AnchorLeave}
        >
          Signup
        </a>
      </span>
    </header>
  );
}

export default Header;
