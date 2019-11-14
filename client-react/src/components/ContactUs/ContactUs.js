import React from "react";

import userImage from '../../images/default-user.jpg';


import { Container, Row, Col, Table, Figure  } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

import './ContactUs.css';



function ContactUs() {
  const creaters = [
    {id:"1", name:"Ben Contreras",    email:"benminer@protonmail.com", image:'' },
    {id:'2', name:"James Hamilton",   email:"jamesleehamilton210@gmail.com", image:''},
    {id:'3', name:"Josh Engelbrecht", email:"jshnglbrcht@gmail.com", image:''},
    {id:'4', name:"Michael Reynolds", email:"michaelreynolds537@gmail.com", image:''},
    {id:'5', name:"Nathan Corbitt",   email:"ncorbitt@gmail.com", image:''},
    {id:'6', name:"Steve Chinburg",    email:"steve_chinburg@hotmail.com", image:''}
  ];



  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col className=''>
            <h1 className="mt-5 mb-5 text-info"> Contact Us </h1>
            
            <div>
            {
                    creaters.map( creater => {

                      return  <Row className='border'>
                                <Col className='border-right'>
                                  <Figure>
                                    <Figure.Image
                                      width={75}
                                      height={75} 
                                      // thumbnail
                                      src={userImage}
                                      alt='creater image'
                                    />
                                    <Figure.Caption>
                                        {creater.name} 
                                    </Figure.Caption>
                                  </Figure>
                              </Col>
                              <Col className='bg-light' style={{height:'auto'}}>
                                <Figure.Caption className='mt-5 text-info'>
                                  {creater.email}
                                </Figure.Caption>
                              </Col>
                      </Row>

                    })
                  }
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
