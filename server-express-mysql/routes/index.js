var express = require('express');
var router = express.Router();
const mysql = require('mysql');
<<<<<<< HEAD

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password1!',
    database: 'sakila'
});

connection.connect(function (err) {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;;
=======
const models = require('../models');
const authService = require('../services/auth');
const Sequalize = require('sequelize')
const Op = Sequalize.Op;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { myName: 'Team-Sakaar' });
});

router.post('/signup', function(req, res) {
  const signup = req.body;
  console.log(`
    POST Data -> ${JSON.stringify( signup )}
  `);

    models.users
      .findOrCreate({
        where: {
          [Op.or]: {
            Username: signup.Username,
            Email: signup.Email
          }
        },
        defaults: {
          FirstName: signup.FirstName,
          LastName: signup.LastName,
          Username: signup.Username,
          Email: signup.Email,
          Password: authService.hashPassword( signup.Password ),
          AccountType: signup.AccountType
        }
      })
      .spread( (user, created) => {
        // result is the user object that was created

        console.log(`
          created: ${created}
          USER: ${JSON.stringify(user)}
          Uname: ${user.Username}
          Email: ${user.Email}
        `)

        if( created ){
          console.log('CREATED_TRUE')

          res.json({
            message: 'User Created',
            status: 201
          })
        }
        
        if( !created ){
          // FALSE, there must an Entry for the username.
          console.log('CREATED_FALSE')

          if( user.Username === signup.Username && user.Email === signup.Email){
            console.log(`
              Email and Username exist: 
              Email: ${user.Email}
              Username: ${user.Username}`);
            res.json({
              message: 'Email and Username exist',
              status: 401 
            })
          }

          // Find and Send back the reason why the creation was false          
          // if username is true then check if email exist as well
          if( user.Username === signup.Username ){
            console.log(`username exist: ${user.Username}`)
            res.json({
              message: 'Username exist',
              status: 401
            })
          } else if( user.Email === signup.Email ){
              console.log(`Email exist: ${user.Email}`);
              res.json({
                message: 'Email exist',
                status: 401 
              })
            }
            
           
        }
      }) //spread
      .catch( error => console.log(`
        There was an error: ${error}
      `) )
}); 


router.post('/band-login', (req, res) => {
  let login = req.body;
  log(`
    LOGIN SERVER BODY --> ${JSON.stringify(req.body)}
  `)

try{
  models.users.findOne({
    where: {
      Username: login.Username
    }
  }).then(user => {
    
    if (!user) {
      console.log('USER',user)
      log('User not found')
      res.json({
        status: parseInt(401),
        message: 'Login Failed'
      });

    } else {

      let passwordMatch = authService.comparePasswords(login.Password, user.Password)
      if( passwordMatch ){
        // the authService to create jwt token
        console.log('Getting Token')
        let token = authService.signUser(user);
        // Adds token to response as a cookie
        res.cookie('jwt', token);

        res.json({
          token,
          firstname:user.FirstName,
          lastname: user.LastName,
          email:user.Email,
          username: user.Username,
          accountType: user.AccountType,
          status: parseInt(200),
          message: 'Login Successful'
        });


      } else {
        console.log('Wrong password');
        res.sendStatus(401).json({
           message: 'Wrong password',
           status: parseInt(401)
        })
      }
    }
    
    });//then

  } catch (err ) {
    console.log('Server might be down. ', err)
  }
});

const log = message => {
  console.log(`
  
  ${message}
  
  `)
}



router.post('/verify', (req, res) => {
  const token = req.body.token;
  console.log('TOKEN ',token)

  authService.verifyUser(token)
  .then(user => {
    console.log(`
      User
    `, user)

    if(user) {
      res.json({
        firstname:user.Firstname,
        lastname: user.LastName,
        email: user.Email,
        username: user.Username,
        accountType: user.AccountType,
        verified: true
      })
    }else {
      res.json({
        verified: false
      })
    }
  })
  

});

router.post('/venue-login', (req, res) => {
  let login = req.body;
  log(`
    LOGIN SERVER BODY --> ${JSON.stringify(req.body)}
  `)

try{
  models.users.findOne({
    where: {
      Username: login.Username
    }
  }).then(user => {
    
    if (!user) {
      console.log('USER',user)
      log('User not found')
      res.json({
        status: parseInt(401),
        message: 'Login Failed'
      });

    } else {

      let passwordMatch = authService.comparePasswords(login.Password, user.Password)
      if( passwordMatch ){
        // the authService to create jwt token
        console.log('Getting Token')
        let token = authService.signUser(user);
        // Adds token to response as a cookie
        res.cookie('jwt', token);

        res.json({
          token,
          firstname:user.FirstName,
          lastname: user.LastName,
          email:user.Email,
          username: user.Username,
          status: parseInt(200),
          message: 'Login Successful'
        });


      } else {
        console.log('Wrong password');
        res.sendStatus(401).json({
           message: 'Wrong password',
           status: parseInt(401)
        })
      }
    }
    
    });//then

  } catch (err ) {
    console.log('Server might be down. ', err)
  }
});




module.exports = router;
>>>>>>> Nate-Frontend
