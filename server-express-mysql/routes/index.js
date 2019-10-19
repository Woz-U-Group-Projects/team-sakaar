var express = require('express');
var router = express.Router();
const mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 
  res.render('index', { myName: 'Team-Sakaar' });
});

module.exports = router;