import React from "react";
import {useHistory, Link} from 'react-router-dom';
import { Container, Row, Col, Table, Figure, Card, Button, CardGroup  } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

import './ContactUs.css';
import { CardFooter } from "react-bootstrap/Card";

function ContactUs() {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

  return (
    <div>
      <Header />
      <hr />
      <Container>
          <Row className='mb-5'>
              <Col>
                   <h1 className="mt-5 mb-5"> Contact Us  <a href='contact-us' className='btn btn-info text-white float-right' >Contact-us</a> </h1> <hr/>
              </Col>
          </Row>

        <Row className='mx-auto'>
        <CardGroup className='mx-auto'>
          <Col>
            
            <Card className='bg-info text-white mb-3 shadow'  style={{ width: '18rem' }}>
                
                <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                
                <Card.Body>
                    <Card.Title>  Ben Contreras  </Card.Title>
                    <Card.Text>
                        <a href='mailto:benminer@protonmail.com'> 
                          <span className='text-white' style={{textShadow:'0px 0px 0px black'}} >benminer</span><span className='text-dark'>@protonmail.comm</span>
                        </a>
                    </Card.Text> <hr />
                    <Button href='#leaveMeAMessage' variant="info">Leave me a message</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className='bg-dark text-white shadow' style={{ width: '18rem' }}>
               
              <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                
                <Card.Body>
                    <Card.Title> James Hamilton</Card.Title>
                    <Card.Text>
                        <a href='mailto:benminer@protonmail.com'> 
                          <span className='text-white' style={{textShadow:'0px 0px 0px black'}} >jamesleehamilton210@gmail.com</span>
                        </a>
                    </Card.Text> <hr />
                    <Button href='#leaveMeAMessage' variant='dark'>Leave me a message</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className='bg-success text-white shadow' style={{ width: '18rem' }}>
               
                <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                
                <Card.Body>
                    <Card.Title>  Josh Engelbrecht </Card.Title>
                    <Card.Text>
                        <a href='mailto:benminer@protonmail.com'> 
                          <span className='text-white' style={{textShadow:'0px 0px 0px black'}} > jshnglbrcht@gmail.com </span>
                        </a>
                    </Card.Text> <hr />
                    <Button href='#leaveMeAMessage' variant="success">Leave me a message</Button>
                </Card.Body>
            </Card>

            </Col>
            </CardGroup>
            </Row>
          


            <Row>
                <CardGroup className='mx-auto'>
                <Col>
                    <Card className='bg-danger text-white shadow' style={{ width: '18rem' }}>
                        
                            <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                        
                        <Card.Body>
                            <Card.Title>   Michael Reynolds  </Card.Title>
                            <Card.Text>
                                <a href='mailto:benminer@protonmail.com'> 
                                <span className='text-white' style={{textShadow:'0px 0px 0px black'}} > michaelreynolds537@gmail.com </span>
                                </a>
                            </Card.Text> <hr />
                            <Button href='#leaveMeAMessage' variant="danger">Leave me a message</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className='bg-primary text-white shadow' style={{ width: '18rem' }}>
                       
                            <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                        
                        <Card.Body>
                            <Card.Title>   Nathan Corbitt  </Card.Title>
                            <Card.Text>
                                <a href='mailto:benminer@protonmail.com'> 
                                <span className='text-white' style={{textShadow:'0px 0px 0px black'}}> ncorbitt@gmail.com </span>
                                </a>
                            </Card.Text> <hr />
                            <Button href='#leaveMeAMessage' variant="primary">Leave me a message</Button>
                        </Card.Body>
                        </Card>
                        </Col>
                        
                        <Col> 
                        <Card className='bg-warning text-white shadow' style={{ width: '18rem' }}>
                            {/* <Card.Header> */}
                                <Card.Img variant="top" src='http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg' />
                            {/* </Card.Header> */}
                        <Card.Body>
                            <Card.Title>    Steve Chinburg  </Card.Title>
                            <Card.Text>
                                <a href='mailto:benminer@protonmail.com'> 
                                <span className='text-dark' style={{textShadow:'0px 0px 0px black'}}> steve_chinburg@hotmail.com </span>
                                </a>
                            </Card.Text> <hr />
                            <Button href='#leaveMeAMessage' variant="warning">Leave me a message</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    </CardGroup>
            </Row> <hr/>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
