import React from "react";

// import "./Home.css";

import Header from "../Header/HeaderWithDropdown";
import Search from "../Main/Search/Search";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";

function ClientHome() {
  return (
    <div>

<div>testing</div>

      <Header />
      <hr />
      <Container>
        <Search  /> <hr />
        <Main /> <hr />
      </Container>
      <Footer />
      
    </div>
    
  );
}

export default ClientHome;