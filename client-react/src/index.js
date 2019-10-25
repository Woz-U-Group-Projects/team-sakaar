import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import Home from "./components/Home/Home";
import BandLogin from "./components/Band/BandLogin";
import VenueLogin from "./components/Venue/VenueLogin";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Signup from "./components/Signup/Signup";
import BandDashboard from "./components/Band/Dashboard/BandDashboard";
import ThanksForRegistering from "./components/Signup/ThanksForRegistering";
import Logout from "./components/Logout/Logout";
import VenueDashboard from "./components/Venue/Dashboard/VenueDashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/band-login" component={BandLogin} />
        <Route path="/venue-login" component={VenueLogin} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/signup" component={Signup} />
        <Route path='/thanks-for-registering' component={ThanksForRegistering} />
        <Route path='/band-dashboard' component={BandDashboard} />
        <Route path='/venue-dashboard' component={VenueDashboard} />
        <Route path='/logout' component={Logout} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
