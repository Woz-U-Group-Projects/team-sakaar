var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');
const Sequalize = require('sequelize');
const Op = Sequalize.Op;




router.get('/', (req, res) => {
    models.users
        .findAll({})
        .then( usersFound => {
            let mappedUsers = usersFound.map( user => (
                {
                 user
                }
            ));

           res.send( JSON.stringify( mappedUsers ) )
        })
})

router.delete('/user/:id', () => {
    const id = parseInt(req.params.id);
    models.users
        .destroy({
            where: {UserId: id}
        })
        .then( result => {

            models
            res.json({
                message: 'User Deleted'
            })
        })
})



module.exports = router;