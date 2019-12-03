import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/HeaderWithDropdown';




const Genre = () => {

    let { name } = useParams();

    return (
        <section className=''>
            <Header /> <hr />

            <h1 className='' style={{fontSize: '5em', color: 'grey'}}>  {name}   </h1> 

        </section>
    )
}

export default Genre