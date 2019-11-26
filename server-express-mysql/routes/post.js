var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');
const Sequalize = require('sequelize');

router.get('/', function(req, res, next) {
    res.render('index', { myName: 'Post Route' });
});

router.post('/postID/:id', (req, res) => {
    const id = req.params.id;
    const post = req.body;
    console.log(`
        id: ${id}
        body: ${JSON.stringify(post)}
    `)

    models.post
        .findOrCreate({
            where: { UserId: id },
            defaults: {
                post: post.postData,
                FirstName: post.FirstName,
                LastName: post.LastName
            }
        })
        .spread( (user, created) => {
            console.log(created)
            if( created ){
                console.log('SAVE_POST: RESULT')
                console.log('USER ', user)
                res.json({
                  message: 'Data has been saved',
                  status: 201
                 })
               }
      
               if( !created ){
                  console.log('ERROR SAVING POST DATA');
                  res.json({
                    message: 'Error SAVING POST',
                    status: 401
                  })
                }
      
            })
            .catch( error => console.log('SPREAD ERROR: ',error) )
        })








  module.exports = router;