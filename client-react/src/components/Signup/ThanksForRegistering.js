import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import {CheckSquare} from 'styled-icons/feather';

import './ThanksForRegistering.css';

function ThanksForRegistering() {
    console.log('TFR')

    let history = useHistory();
    let location = useLocation();
    let login = location.state[0];
    console.log('login:',login)
    console.log( typeof login )
    let [count, setCount] = useState(3);
    let counter = setInterval( countDown, 1000);

    function countDown(){

        if( count == 0){
            stopCounter();
            history.push(login);
        }else{
            setCount( count - 1)
        }
    }

    function stopCounter(){
        console.log('CLEAR_COUNT: ',counter)
        clearInterval(counter)
    }

     

        
    
  



    return(
        <div>
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
