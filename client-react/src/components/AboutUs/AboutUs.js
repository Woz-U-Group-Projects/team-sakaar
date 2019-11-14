import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header/HeaderWithDropdown";
import Footer from "../Footer/Footer";

function AboutUs() {
  return (
    <div>
      <Header />
      <hr />
      <Container>
        <Row style={{minHeight:700}}>
          <Col>
            <h1 className="mt-5 mb-5"> About </h1>
            <hr />

           <div className=''>
             <p className='p-3' style={{letterSpacing:2, fontSize:'1.2em'}}>
                <strong style={{}}>On Demand Bands</strong> seeks to create a social media platform where musicians
                can offer their services to prospective venues, event coordinators, or
                other clients. The music community is very diverse, encompassing all
                spectrums of expression with many different genres.On Demand Bands aims
                to create a network of local, regional, and national talent that best fits
                these clients' needs. Accessibility and exposure are key to any musician's
                success. So this application places a high priority on the ease with which
                an artist may display and share their content.
                In addition, On Demand Bands creates a forum where the music community can
                express their opinions on an artist's performance or find links to their websites.
                A rating system is in place to provide feedback to both performers or venues.
                Music fans can post or share, see schedules of upcoming events or performances,
                and locate venues with the additional services they provide. On Demand Bands
                incorporates this feature is to create a dialogue between venues, musicians, and
                their fans. It is a powerful marketing tool that highlights what a business
                or a band can do to improve their exposure to a wider clientele.
                Above all else, On Demand Bands strives to bring people together through the
                unifying and positive message of music.
            </p>
           </div><hr/>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default AboutUs;
