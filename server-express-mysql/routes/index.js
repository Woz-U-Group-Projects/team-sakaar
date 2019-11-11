var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');  // <--- Add this line

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { myName: 'Team-Sakaar' });
});

module.exports = router;