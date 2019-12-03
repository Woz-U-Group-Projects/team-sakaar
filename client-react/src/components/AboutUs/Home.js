import React from "react";

import "./Home.css";

import Header from "../Header/HeaderWithDropdown";
import Search from "../Search/Search";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Search /> <hr />
        <Main /> <hr />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
