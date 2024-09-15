import React,{useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

import {CheckSquare} from 'styled-icons/feather';
import cookies from 'cookiesjs';
import Header from '../Header/HeaderWithDropdown';


function Logout() {
    console.log('TFR')

    let history = useHistory();

    let [count, setCount] = useState(3);
    let counter;

    function countDown(){

        if( count === 0){
            stopCounter();
            history.push('/');
        }else{
            setCount( count - 1)
        }
    }

    counter = setInterval( countDown, 1000);

    const stopCounter = () => clearInterval(counter);

    const  deleteJWTCookie = () => cookies({ jwt: ''}, { expires: new Date(0) });

    useEffect( () => {
        deleteJWTCookie();

        return () => {
            stopCounter()
        }
        
    });
        
    
  



    return(
        <div>
            <Header /> <hr />
        <Container>
            <Row>
                <Col>
                    <div>
                        <CheckSquare  className='text-success' style={{marginTop:200}} size={60}/>
                    </div>
                    <h1 className='mt-5 text-success' style={{textShadow: '1px 1px 1px black'}} >You have beeen looged out! </h1> <hr/>
                    <div id='thank-you-image' className='' style={{marginBottom:100}}>
                        <h5 className='text-info border border-info rounded p-3' 
                            style={{
                                position:'relative',
                                top: '30px' 
                            }} 
                        >
                            This page will redirect you to the <strong>home</strong> page in {count} seconds.
                        </h5>
                    </div> 

                </Col>
            </Row>
        </Container>
        </div>
    )
   

}

export default Logout;
