import React from 'react';
import Header from '../Header/Header';
import {Button} from "react-bootstrap";




const SignedOut = () => (
    <div>
    <Header title="SignedOut"/>
  <h2>You are securely SIGNED OUT!</h2>
  <div>
    

    <Button href="/">Login</Button>
</div>
</div>

  );
  
  export default SignedOut;