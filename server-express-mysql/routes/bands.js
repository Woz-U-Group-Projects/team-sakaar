const express = require('express');
var router = express.Router();
var models = require('../models');

//... Routing code will go here next
router.get('', function(req, res, next) {
    models.band
      .findAll({ 
        attributes: ['band_id', 'name', 'genre', 'zip_code' ],
        include: [{ 
          model: models.bandRating, 
          attributes: ['band_id', 'venue_id', 'rating', 'review'] 
        }]      
      })
      .then(bandsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(bandsFound));
      });
  });
  
  router.get('/:id', function(req, res, next) {
    models.band
      .findOne({ 
        include: [{ model: models.bandRating }], 
        where: { band_id: parseInt(req.params.id) }
      },
    )
      .then(bandsFound => {
        res.setHeader('Content-Type', 'application/json'),
        res.send(JSON.stringify(bandsFound));
      });
  });

  router.post('/', function (req, res, next) {
    models.band.create(req.body)
      .then(newBand => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newBand));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

  router.post('', function (req, res, next) {
    model.band.findOrCreate({
      where: { 
        name: req.body.name, 
        genre: req.body.genre 
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/bands/' + result.band_id);
      } else {
        res.status(400);
        res.send('Band already exists');
      }
    })
  });
  
  router.put("/:id", function (req, res, next) {
    let bandId = parseInt(req.params.id);
    models.band
      .update(req.body, { where: { band_id: bandId } })
      .then(result => res.redirect('/bands/' + bandId))
      .catch(err => {
        res.status(400);
        res.send("There was a problem updating the band.  Please check the band information.");
      });
  });
  
  router.delete("/bands/:id", function (req, res, next) {
    let bandId = parseInt(req.params.id);
    models.band
      .destroy({
        where: { band_id: bandId }
      })
      .then(result => res.redirect('/bands'))
      .catch(err => { 
        res.status(400); 
        res.send("There was a problem deleting the band. Please make sure you are specifying the correct id."); 
      }
  );
  });
  
  module.exports = router;
  
  

