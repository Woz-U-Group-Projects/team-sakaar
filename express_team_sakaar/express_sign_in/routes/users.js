var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('../services/passport'); // <--- Add this code
var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', function (req, res, next) {
  res.render('signup');
});

router.post('/signup', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.username
      },
      defaults: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Password: req.body.password
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('login'); //<---Change this line to redirect to the login screen
      } else {
        res.send('This user already exists');
      }
    });
});

router.get('/profile/:id', function (req, res, next) {
  models.users
    .findByPk(parseInt(req.params.id))
    .then(user => {
      if (user) {
        res.render('profile', {
          FirstName: user.FirstName,
          LastName: user.LastName,
          Email: user.Email,
          Username: user.Username
        });
      } else {
        res.send('User not found');
      }
    });
});

router.post('/login', function (req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
      } else {
        res.send('Invalid login!');
      }
    });
});

module.exports = router;