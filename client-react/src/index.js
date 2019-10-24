import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/Home/Home";
import ClientLogin from "./components/Client/ClientLogin";
import VenueLogin from "./components/Venue/Venue";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";

import ClientHome from "./components/Client/Clienthome/Clienthome";
import VenueHome from "./components/Venue/VenueHome/VenueHome";
import SignedOut from "./components/SignedOut/SignedOut";
import Signup from "./components/Signup/Signup"

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/client-login" component={ClientLogin} />
        <Route path="/venue-login" component={VenueLogin} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/client-home" component={ClientHome} />
        <Route path="/venue-home" component={VenueHome} />
        <Route path="/signedout" component={SignedOut} />
        <Route path="/signup"  component={Signup} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);