var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const models = require('../models');

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
          Password: signup.Password
        }
      })
      .spread( (result, created) => {
        // result is the user object that was created

        if( created ){
          res.status(200).json({
            message: `Data Rev'd & User Created.`
          })
        }else{
          res.status(401).json({
            message: 'There was and Error with request.'
          })
        }
      })

  res.end()

})

module.exports = router;