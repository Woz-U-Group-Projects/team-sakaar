var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');
var staticModels = require('../staticModels/genres'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { myName: 'Team-Sakaar' });
});

router.get('/staticGenres', function (req, res, next) {

  res.send(JSON.stringify(
    staticModels.genre
  ));
});

module.exports = router;