var express = require('express');
var router = express.Router();
const mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
  let query = 
  res.render('index', { myName: 'Team-Sakaar' });
});

router.post('/signup', function(req, res) {
  const signup = req.body;
  console.log(`POST Data -> ${JSON.stringify( signup )}`);


  console.log(res.status)
  res.status ? ( 
    res.status(200).json({
      message: `Data Rev'd`
    })
  ):(
    res.status(401).json({
      message: 'Error with req'
    })
  );

  res.end()

})

module.exports = router;