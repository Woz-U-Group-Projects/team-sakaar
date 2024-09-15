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
import ContactUsV2 from './components/ContactUs/ContactUsv2';
import Signup from "./components/Signup/Signup";
import BandProfile from "./components/Band/Dashboard/BandDashboard-v2"; //changed to v2 for testing

import ThanksForRegistering from "./components/Signup/ThanksForRegistering";
import Logout from "./components/Logout/Logout";

import VenueProfile from "./components/Venue/Dashboard/VenueDashboard";
// import VenueSettings from "./components/Venue/Dashboard/VenueSettings";
import VenueSettingsV2 from "./components/Venue/Dashboard/VenueSettings-v2";

import BandSettings from './components/Band/Dashboard/BandSettings';
import UploadPicture from "./components/PicUpload/PicUpload";
import NewsFeed from "./components/Band/Dashboard/Newsfeed";




function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        
        <Route path="/band-login" component={BandLogin} />
        <Route path='/band-profile' component={BandProfile} />
        <Route path="/band-settings" component={BandSettings} />

        <Route path="/venue-login" component={VenueLogin} />
        <Route path='/venue-profile' component={VenueProfile} />       
        <Route path="/venue-settings" component={VenueSettingsV2} />    
        
        <Route path="/signup" component={Signup} />
        <Route path='/thanks-for-registering' component={ThanksForRegistering} />
        <Route path='/logout' component={Logout} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path='/upload-pic' component={UploadPicture} />

        <Route path='/news-feed' component={NewsFeed} />
        
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);