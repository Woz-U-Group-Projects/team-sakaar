var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const models = require('../models');
const authService = require('../services/auth');
const jwt = require('jsonwebtoken');
const Sequalize = require('sequelize');
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

const log = message => {
  console.log(`
  
  ${message}
  
  `)
}

router.post('/verify', (req, res) => {
  const token = req.body.token;
  console.log(`
      
    VERIFY ROUTE
  
  `)


  authService.verifyUser(token)
  .then(user => {

    if( user ) {

      res.json({
        userid: user.UserId,
        firstname:user.FirstName,
        lastname: user.LastName,
        email: user.Email,
        username: user.Username,
        accountType: user.AccountType,
        firstTimeLogin: user.FirstTimeLogin, 
        verified: true
      })

    } 
    
    if( !user ){
      console.log('FALSE: ',user)
      res.json({ verified: false })
    };
    
  })  

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
  })
   .then(user => {
    
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
          firstname:      user.FirstName,
          lastname:       user.LastName,
          email:          user.Email,
          username:       user.Username,
          accountType:    user.AccountType,
          firstTimeLogin: user.FirstTimeLogin,
          status: parseInt(200),
          message: 'Login Successful'
        });


      } else {
        console.log('Wrong password');
        res.json({
           message: 'Wrong password',
           status: parseInt(401)
        })
      }
    }
    
    }) //then
    .catch( error => console.log('An Error Occured: ',error))

  } catch (err ) {
    console.log('Server might be down. ', err)
  }
});

router.get('/band-settings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  models.bands
    .findByPk( id )
      .then(userSettings => {

        if( !userSettings ){
          console.log(`
            No user settings: 
          `,userSettings)
          res.json({
            message: ['No band settings', false]
          })
        }
        
        if( userSettings ){
          res.json({
            message: ['Loading settings', true],
            settings: userSettings
          })

        }
  
      })
      .catch(error => {
        console.log(`
          An Error occured -> 
        `, error)
        res.json({
          message: error
        })
      })
});

router.post('/submit-settings/:id', (req, res) => {
  const id = req.params.id;
  const band = req.body;

  console.log('****** REQ BODY ******: ', band)

  models.bands
      .findOrCreate({ 
        where: { BandId: id },
        defaults: {
          ZipCode: band.ZipCode,
          Name: band.Name,
          ContactPerson: band.ContactPerson,
          ContactPersonPhoneNumber: band.ContactPersonPhoneNumber,
          Genre: band.Genre,
          Bio: band.Bio,
          Price: band.Price,
          PersonalWebsite: band.PersonalWebsite,
          Facebook: band.Facebook,
          Instagram: band.Instagram
        } 
      })
      .spread( (user, created) => {
        console.log(created)

        if( created ){
          console.log('SAVE_SETTINGS: RESULT')
          console.log('USER ', user)
          res.json({
            message: 'Data has been saved',
            status: 201
           })
         }

         if( !created ){
            console.log('ERROR SAVING SETTINGS');
            res.json({
              message: 'Error updating settings',
              status: 401
            })
          }

      })
      .catch( error => console.log('SPREAD ERROR: ',error) )
})

router.put('/save-settings/:id', (req, res) => {
  const id = req.params.id;
  const band = req.body;

  models.bands
      .update( band,{ where: { BandId: id } })
      .then( result => {

        if( result ){
          console.log(`
            UPDATE: TRUE - RETURNING OBJ
          `)
          res.json({
            message: 'Data has been saved',
            status: 201
           })
         }

         if( !result ){
            console.log(`
              ERROR SAVING SETTINGS
            `);
            res.json({
              message: 'Error updating settings',
              status: 401
            })
          }

      })
      .catch( error => console.log('UPDATE ERROR: ',error) )
})



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
        res.json({
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

router.get('/venue-settings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  models.venues
    .findByPk( id )
      .then(userSettings => {

        if( !userSettings ){
          console.log(`
            No user settings: 
          `,userSettings)
          res.json({
            message: 'No band settings'
          })
        }
        
        if( userSettings ){

          res.json({
            message: 'Loading settings',
            settings: userSettings
          })

        }
  
      })
      .catch(error => {
        console.log(`
          An Error occured -> 
        `, error)
        res.json({
          message: error
        })
      })
});

router.post('/venue-submit-settings/:id', (req, res) => {
  const id = req.params.id;
  const venue = req.body;

  console.log(`
  
    ****** REQ BODY ******
    venue
  `)

  models.venues
      .findOrCreate({ 
        where: { VenueId: id },
        defaults: {
          Name: venue.Name,
          Address: venue.Address,
          ContactPerson: venue.ContactPerson,
          PhoneNumber: venue.PhoneNumber,
          FirstTimeLogin: venue.FirstTimeLogin
        } 
      })
      .spread( (user, created) => {
        console.log(created)

        if( created ){
          console.log('SAVE_SETTINGS: RESULT')
          console.log('USER ', user)
          res.json({
            message: 'Data has been saved',
            status: 201
           })
         }

         if( !created ){
            console.log('ERROR SAVING SETTINGS');
            res.json({
              message: 'Error updating settings',
              status: 401
            })
          }

      })
      .catch( error => console.log('SPREAD ERROR: ',error) )
})

router.post('/venue-save-settings/:id', (req, res) => {
  const venue = req.body;
  const id = parseInt(req.params.id);

  console.log(`
        VENUE SAVE SETTING

        VENUE BODY 
        ${JSON.stringify(venue)}

        ID: ${id}
        
  `)

  models.venues
      .update( req.body, { where: { VenueId: id } })
      .then( result => {

          if( result ){
              console.log(`
              SAVE SETTINGS
              Result: ${result}
              
              `)
              res.json({
                message: 'Data has been saved.',
                status: 201
              })
          }
          
          if( !result ){
              console.log('ERROR UPDATING SETTINGS', result);
              res.json({
                message: 'Error updating saving data',
                status: 401
              })
          }
      })
      .catch(error => {
        console.log(`
        AN ERROR OCCURED 
        ${JSON.stringify(error)}
        `);

      })
});


module.exports = router;
