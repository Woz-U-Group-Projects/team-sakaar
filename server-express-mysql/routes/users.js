var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//... Routing code will go here next
router.get('', function(req, res, next) {
    models.user
      .findAll({ 
        attributes: ['user_id', 'first_name', 'last_name', 'user_name', 'password' ],
        include: [{ 
          model: models.bandRating, 
          attributes: ['band_id', 'venue_id', 'genre', 'rating', 'review'] 
        }]      
      })
      .then(usersFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(usersFound));
      });
  });
  
  router.get('/:id', function(req, res, next) {
    models.user
      .findOne({ 
        include: [{ model: models.bandRating }], 
        where: { band_id: parseInt(req.params.id) }
      },
    )
      .then(usersFound => {
        res.setHeader('Content-Type', 'application/json'),
        res.send(JSON.stringify(usersFound));
      });
  });

  router.post('/', function (req, res, next) {
    models.user.create(req.body)
      .then(newUser => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newUser));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

  router.post('', function (req, res, next) {
    model.user.findOrCreate({
      where: { 
        firstName: req.body.firstName,
        lastName:  req.body.lastName,
        userName: req.body.userName,
        password: req.body.password 
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/users/' + result.user_id);
      } else {
        res.status(400);
        res.send('User already exists');
      }
    })
  });
  
  router.put("/:id", function (req, res, next) {
    let userId = parseInt(req.params.id);
    models.user
      .update(req.body, { where: { user_id: userId } })
      .then(result => res.redirect('/user/' + userId))
      .catch(err => {
        res.status(400);
        res.send("There was a problem updating the user.  Please check the user information.");
      });
  });
  
  router.delete("/users/:id", function (req, res, next) {
    let userId = parseInt(req.params.id);
    models.user
      .destroy({
        where: { user_id: userId }
      })
      .then(result => res.redirect('/users'))
      .catch(err => { 
        res.status(400); 
        res.send("There was a problem deleting the user. Please make sure you are specifying the correct id."); 
      }
  );
  });
  
  module.exports = router;
  
  



module.exports = router;
