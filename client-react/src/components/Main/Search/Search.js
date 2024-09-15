import React, { useState } from "react";

import { Col, Row, InputGroup, FormControl, Button, Dropdown, DropdownButton } from "react-bootstrap";

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
  const [value, setValue] = useState('');


  return (
    <div className="p-3">
      <Row className="">
      <Col sm={8} className='mx-auto'>

        <p className="float-middle">Search For A Band</p>

        <p className='text-left' >Example 1 - </p>

        {/* *******************************SEARCH-ONE ******************************************** */}

        <InputGroup className="mb-3">
        
        <FormControl 
            className="float-middle"
            size="lg"
            placeholder="City, State, Zip"
            aria-label="Location"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append className="float-middle">
            
          </InputGroup.Append>
        </InputGroup>

        {/* *********************************SEARCH-TWO****************************************** */}


        <p className='text-left'> Example 2 - your basic search box</p>
        <InputGroup className="mb-3">
          <FormControl
            size="lg"
            placeholder="Genre, Bandname"
            aria-label="Genre, Bandname"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Append className="">
            <Button variant="secondary" className="px-4">
              <SearchLocation size="18" />
            </Button>
          </InputGroup.Append>
        </InputGroup>

        {/* ************************************SEARCH-THREE*************************************** */}

        <p className='text-left'>Example 3 - these are links and we would have to create each page for each Genre.</p>
        <InputGroup className="mb-3 " size='lg'>

            
            <DropdownButton
              className=''
              style={{ }} 
              variant='outline-warning' 
              title='Genre' 
              as={InputGroup.Prepend}  
              id='input-group-dropdown'
              onChange={ e  => {
                  setValue(e)
              }}
              >
                <Dropdown.Header>Genres</Dropdown.Header>
                <Dropdown.Divider />
                {
                  Genres.map( (genre,index) => {
                    return <Dropdown.Item key={`${index}-${genre}`} href={`#${genre}`}>{genre}</Dropdown.Item>
                  })
                }
            </DropdownButton>

          <InputGroup.Append className="">
            <Button variant="outline-warning" className="px-4" type='submit' onClick={ () => alert('Submitted: ',value)}>
              <SearchLocation size="18" />
            </Button>
          </InputGroup.Append>

       
        </InputGroup>


                {/* ************************************SEARCH-FOUR*************************************** */}

                <p className='text-left'>Example 4 - pick and search</p>

                  <InputGroup className="mb-3" size='lg'>

                      
                      <select className=' btn btn-outline-info px-3' style={{width:'90%'}}>
                          {
                            Genres.map( (genre,index) => {
                              return <option style={{fontSize:'1.2em'}} className='p-5' key={`${index}-${genre}`} value={`#${genre}`}>{genre}</option>
                            })
                          }
                      </select>
                      

                      <InputGroup.Append className="">
                          <Button variant="outline-info" className="px-4" type='submit'>
                            <SearchLocation size="18" />
                          </Button>
                      </InputGroup.Append>

                    </InputGroup>

      </Col>
    </Row>
    </div>
  );
}

export default Search;
