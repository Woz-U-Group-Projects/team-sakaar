var express = require('express');
var router = express.Router();
var models = require('../routes');

router.get('/', function(req, res, next) {
  models.venue
    .findAll({ 
      attributes: ['venue_id', 'name', 'address','city', 'state','zip_code' ],
      include: [{ 
        model: models.venueRating, 
        attributes: ['venue_id', 'band_id', 'music_venue_rating', 'comment'] 
      }]      
    })  

    })
    .then(venuesFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(venuesFound));
    });

router.get('/:id', function(req, res, next) {
  models.venue
    .findByPk(parseInt(req.params.id), { 
      include: [{ model: models.venue }]
    })
    .then(venuesFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(venuesFound));
    })
});

router.put("/:id", function (req, res, next) {
  let venueId = parseInt(req.params.id);
  models.venue
    .update(req.body, { where: { venue_id: venueId } })
    .then(result => res.redirect('/venues/' + venueId))
    .catch(err => {
      res.status(400);
      res.send("There was a problem updating the venue.  Please check the venue information.");
    });
});



  module.exports = router;