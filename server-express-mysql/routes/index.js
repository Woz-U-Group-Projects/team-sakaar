var express = require('express');
var router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'SakaarDB'

});

connection.connect(function(err){
  if(err){
    console.log(err);
  } else
  console.log("We are connected to the database!");
})


/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 
  res.render('index', { myName: 'Team-Sakaar' });
});

module.exports = router;