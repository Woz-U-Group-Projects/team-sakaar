import React, { useState, useEffect } from 'react'
import { Container, Row, Col , InputGroup,Form, FormControl, Button, Alert } from 'react-bootstrap';
import { InputGroupAppend } from 'react-bootstrap/InputGroup';

const axios =  require('axios');


const UploadPicture = () => {

    const [pic, setPic] = useState('');
    const [picName, setPicName] = useState('');
    const [uploadedFileMD5, setUploadedFileMD5] = useState('');
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [picture, setPicture] = useState('');

    const pictureSelectedHandler = e => {
    
        setPic( e.target.files[0] )
        setPicName( e.target.files[0].name)

    }
    useEffect( () => {
        console.log('Pic: ',pic)
        console.log('Pic Name: ', picName)
    },[pic,picName])

    const PictureUploadHandler = e => {
        e.preventDefault();

        // UPLOAD PERCENTAGE: AXIOS -> Math.round( progressEven.loaded / progressEvent.total * 100 ) + %
      
        const formData = new FormData();
        formData.append('profilePicture', pic);

        console.log('form data:', formData)

        axios.post(`http://localhost:3001/upload/ProfilePic`, formData, {
            headers: { 'Content-type': 'multipart/form-data'}
        })
        .then( res => {
            console.log(`RESPONSE: 
            
            `,res)

            let pic = res.data 
            setUploadedFileMD5( pic.md5 );
            setUploadedFileName( pic.name );
        })

    }

    return(
        <Container>
            <Row className='mt-5'>
                <Col className='' sm={12}>
                            <h1 className='mt-5'>Upload a Picture with ReactJS</h1>

                        <Form onSubmit={PictureUploadHandler}>
                        <Form.Row>
                            <Form.Group className='mt-5 w-100' >
                                <Form.Control  className='w-100 border border-dark rounded'
                                    name='profilePicture'
                                    type='file'
                                    accept=".png, .jpg, .jpeg"
                                    onChange={pictureSelectedHandler}
                                />
                                <Button type='submit' className='float-right mt-3'>Upload</Button>
                            </Form.Group>
                        </Form.Row>
                        </Form>  <hr /> 
                            
                            <section className='my-5' style={{display: !uploadedFileName?'none':''}}>
                                <h4 className='mb-3' >Uploaded FIle Info</h4>
                                Name: <h2>{uploadedFileName}</h2>
                                MD5: <h3>{uploadedFileMD5}</h3>
                            </section>
                    </Col><hr />
 
            </Row>
            <Row>
                <Col><hr />
                    
                    <section id="getPicture">
                        <h1 className='mt-5'>Get Uploaded Pic</h1>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder={uploadedFileMD5}
                                aria-label="Picture id"
                                aria-describedby="basic-addon2"
                                />
                            <InputGroup.Append>
                            <Button 
                                value={uploadedFileMD5}
                                className='' 
                                onClick={ () => {
                                    axios.get(`http://localhost:3001/upload/ProfilePic/${uploadedFileMD5}`)
                                        .then(picture => console.log('GET_PICTURE:', picture) )
                                }}
                            id="basic-addon2"
                            >
                                GET
                            </Button>
                            </InputGroup.Append>
                        </InputGroup>
                         
                        <section id="picture">

                        </section>

                    </section>

                </Col>
            </Row>
        </Container>
    )
}

export default UploadPicture;