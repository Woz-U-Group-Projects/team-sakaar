import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { Col, Row, InputGroup, Form, Button} from "react-bootstrap";

import { SearchLocation } from "styled-icons/fa-solid/SearchLocation";



/** 
 * 
 *  Genres as an Array for now, so we can loop over them to easially add them to the dropdown
 * 
 * 
*/
let Genres = [
  'Dance/EDM (Electronic Dance Music)',
  'Hip-Hop and R&B',
  'Rap',
  'Classic Hip-Hop',
  'Classic R&B',
  'R&B Soul',
  'Gospel',
  'Reggae',
  'Rock',
  'Metal',
  'Alternative',
  'Adult Alternative',
  'Classic Rock',
  'Soft Rock',
  'Country Pop',
  'Today\'s Country',
  'Classic Country',
  'Contemporary Christian',
  'Latino Pop',
  'Musica Urbana',
  'Mexicana',
  'Smooth Jazz',
  'Jazz',
  'Blues',
  'Light Classical'
]


function Search() {

  const history = useHistory();

  const [value, setValue] = useState('');
  useEffect( () => {
    console.log('VALUE: ',value)
  },[value])

  const handleGenreSubmit = e => {

    e.preventDefault();

    history.push(`/genre/${value}`)
  
  }

  return (
    <div className="p-3">
      <Row className="">
      <Col sm={8} className='mx-auto'>

                <Form  onSubmit={handleGenreSubmit} className='w-100' style={{position:'absolute', zIndex:100, marginTop:'-100px'}} title='Search Genre'>
                  <InputGroup className="mb-3" size='lg'>

                      
                      <select className=' btn btn-light text-dark px-3' id='select' size='sm' style={{width:'90%', color:'white'}} onChange={ e => setValue(e.target.value) }>
                          {
                            Genres.map( (genre,index) => {
                              return <Button as='option' className='' style={{fontSize:'1.2em'}} className='p-5' key={`${index}-${genre}`} value={genre}>
                                      {genre}
                                    </Button>
                            })
                          }
                      </select>
                      

                      <InputGroup.Append className="">
                          <Button variant="" className="px-4 text-white" type='submit' style={{backgroundColor:'#03774D'}}>
                            <SearchLocation size="18" />
                          </Button>
                      </InputGroup.Append>

                    </InputGroup>
                </Form>

      </Col>
    </Row>
    </div>
  );
}

export default Search;
