var express = require('express'); 
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');
var staticModels = require('../staticModels/genres'); //Add this line 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { myName: 'Team-Sakaar' });
});

 // Add this function below
router.get('/staticGenres', function (req, res, next) {

  res.send(JSON.stringify(
    staticModels.genre
  ));
});

module.exports = router;