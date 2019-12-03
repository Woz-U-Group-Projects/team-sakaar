import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import {CheckSquare} from 'styled-icons/feather';

import './ThanksForRegistering.css';
import Header from '../Header/HeaderWithDropdown';



function ThanksForRegistering() {

    let history = useHistory();
    let location = useLocation();
    
    login = location.state === undefined? '':location.state.map(l => l);

    console.log('Thanks For Registering: ', login[0]);
    
    let [count, setCount] = useState(3);
    let counter; 
    let stopCounter = null; 
    let countDown = null;
    let login = '';
    let navigateToLogin = null;
   

    navigateToLogin = () => {
        history.push(login);
     }

    countDown = () => {

        if( count == 0 ){

            stopCounter();
            
        }else{

            setCount( count - 1)
        }
    };

 

    counter = setInterval( countDown, 1000);

    stopCounter = () => {
        
        clearInterval(counter);

    };
    
    useEffect( () => {


        return () => {
            stopCounter();
            history.push( login );
        }
        
    },[count === 0]);
        
  



    return(
        <div>
            <Header /> <hr />
        <Container>
            <Row>
                <Col>
                    <div>
                        <CheckSquare  className='text-success' style={{marginTop:200}} size={60}/>
                    </div>
                    <h1 className='mt-5 text-success' style={{textShadow: '1px 1px 1px black'}} >Thanks For Registering! </h1> <hr/>
                    <div id='thank-you-image' className='' style={{marginBottom:100}}>
                        <h5 className='text-info border border-info rounded p-3' 
                            style={{
                                position:'relative',
                                top: '30px' 
                            }} 
                        >
                            This page will redirect you to the <strong>login</strong> page in {count} seconds.
                        </h5>
                    </div> 

                </Col>
            </Row>
        </Container>
        </div>
    )
   

}

export default ThanksForRegistering;
