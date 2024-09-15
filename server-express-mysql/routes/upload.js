var express = require('express');
var router = express.Router();
const path = require('path');

const mysql = require('mysql2');
const models = require('../models');
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');
const Sequalize = require('sequelize');
const Op = Sequalize.Op;

router.get('/', function(req, res, next) {
    res.render('index', {myName:'Upload Route'})
});

router.get('/ProfilePic', function(req, res, next) {

    res.render('file', {myName:'File uploader'})
    // console.log(`REQ: `,req.files.profilePicture.name); // the uploaded file object
    // console.log( req.files.profilePicture )
});

router.post('/ProfilePic', function(req, res, next) {

    // console.log(`REQ: `,req.files.profilePicture.name); // the uploaded file object

    const profile_picture = req.files.profilePicture;
    console.log(`
        PROFILE_PICTURE

    `,profile_picture )

    
    profile_picture.mv(`${__dirname}/../public/profile_pictures/${profile_picture.name}`, err => {
        if( err ){
            console.error('WE GOT AN ERROR: ', err )
        }
    });

    res.json({
        name: profile_picture.name,
        md5:  profile_picture.md5
    })

});

router.get('/ProfilePic/:id', (req, res) => {
    const picture_id = req.params.id;

    const p = path.join(`/server-express-mysql/public/profile_pictures/${picture_id}`);

    console.log( 'PROFILE PIC', Buffer.from(p) )


});

module.exports = router;