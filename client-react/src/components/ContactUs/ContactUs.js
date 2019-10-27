import React from "react";

import { Container, Row, Col, Table, Figure  } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

import './ContactUs.css';

function ContactUs() {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col className=''>
            <h1 className="mt-5 mb-5"> Contact Us  <a href='/contact-us-v2' className='btn btn-info float-right' >Contact-us-V2</a> </h1>
            
            <div>

              <Table className='mx-auto' variant='' >
                <thead>
                </thead>

                <tbody>
                <tr>
                <td>
                    <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                            Ben Contreras 
                        </Figure.Caption>
                      </Figure>                         
                      </td>
                      <td className='align-middle'>
                        <a href='mailto:benminer@protonmail.com'> 
                          <span className='text-info' style={{textShadow:'0px 0px 0px black'}} >benminer</span><span className='text-dark'>@protonmail.comm</span>
                        </a>
                      </td>
                  </tr>
                  <tr>
                  <td>
                    <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                          James Hamilton
                        </Figure.Caption>
                      </Figure>                         
                      </td>
                    <td className='align-middle'>jamesleehamilton210@gmail.com</td>
                  </tr>
                  <tr>
                  <td>
                    <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                        Josh Engelbrecht
                        </Figure.Caption>
                      </Figure>                         
                      </td>
                    <td className='align-middle'>jshnglbrcht@gmail.com</td>
                  </tr>
                  <tr>
                  <td>
                    <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                        Michael Reynolds 
                        </Figure.Caption>
                      </Figure>                         
                      </td>
                    <td className='align-middle'>michaelreynolds537@gmail.com</td>
                  </tr>
                  <tr>
                    <td>
                        <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                          Nathan Corbitt
                        </Figure.Caption>
                        </Figure>                         
                      </td>
                    <td className='align-middle'>ncorbitt@gmail.com</td>
                  </tr>
                  <tr>
                  <td>
                        <Figure>
                        <Figure.Image 
                          src="http://martialclipart.tripod.com/sitebuildercontent/sitebuilderpictures/shadowkick.jpg" 
                          alt='me'
                        />
                        <Figure.Caption>
                        Steve Chinburg
                        </Figure.Caption>
                        </Figure>                         
                      </td>
                    <td className='align-middle'>steve_chinburg@hotmail.com</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row> <hr/>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUs;
