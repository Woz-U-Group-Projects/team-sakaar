var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const models = require('../models');
const authService = require('../services/auth')

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 
  res.render('index', { myName: 'Team-Sakaar' });
});

router.post('/signup', function(req, res) {
  const signup = req.body;
  console.log(`POST Data -> ${JSON.stringify( signup )}`);

    models.users
      .findOrCreate({
        where: {
          Username: signup.Username
        },
        defaults: {
          FirstName: signup.FirstName,
          LastName: signup.LastName,
          Email: signup.Email,
          Password: authService.hashPassword( signup.Password )
        }
      })
      .spread( (result, created) => {
        // result is the user object that was created

        console.log(`
          
          created: ${created}
          result: ${JSON.stringify(result)}
        `)

        if( created ){
          res.json({
            message: `User Created.`,
            status: 201
          })
          res.sendStatus(201)
        }
        
        if( !created ){
          console.log('created, was false')
          res.json({
            message: 'Username has been taken',
            status: 401
          })
          res.sendStatus(401)
        }
      })
});

router.post('/login', function(req, res){
  models.users
    .findOne({
      where: {
        Username: req.body,username
      }
    })
    .then( user => {

      if( !user ) {
        res.status(401).json({
          message: 'Login failed'
        })
      } else {
        let passwordMatch = authService.comparePasswords(req.body.password, user.Password)

        if( passwordMatch ){

          // the authService to create jwt token
          let token = authService.signUser(user); 
          
          // Adds token to response as a cookie
          res.cookie('jwt', token);              
          
        } else {
          res.status(401).json({
            message: 'wrong password'
          })
          res.end()
        }
      }

    })
}); 

module.exports = router;