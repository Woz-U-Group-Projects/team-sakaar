import React from "react";

import "./Home.css";

import Header from "../Header/HeaderWithDropdown";
import Search from "../Main/Search/Search";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";
// import Search from "../Main/Search/Search";

function Home() {
  return (
    <div>
      <Header />
      <hr />
      <Container className=''>
        <Search />
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
