//... Routing code will go here next
router.get('', function(req, res, next) {
    models.client
      .findAll({ 
        attributes: ['client_id', 'first_name', 'last_name', 'company_name', 'event_date', 'event_zip_code',  'genre' ],
        include: [{ 
          model: models.band, 
          attributes: ['band_id', 'name', 'contact_person', 'e_mail', 'genre', 'zip_code' ] 
        }]      
      })
      .then(clientsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(clientsFound));
      });
  });
  
  router.get('/:id', function(req, res, next) {
    models.client
      .findOne({ 
        include: [{ model: models.client }], 
        where: { client_id: parseInt(req.params.id) }
      },
    )
      .then(clientsFound => {
        res.setHeader('Content-Type', 'application/json'),
        res.send(JSON.stringify(clientsFound));
      });
  });

  router.post('/', function (req, res, next) {
    models.client.create(req.body)
      .then(newClient => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(newClient));
      })
      .catch(err => {
        res.status(400);
        res.send(err.message);
      });
  });

  router.post('', function (req, res, next) {
    model.client.findOrCreate({
      where: { 
        name: req.body.name, 
        genre: req.body.genre 
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('/clients/' + result.client_id);
      } else {
        res.status(400);
        res.send('Client already exists');
      }
    })
  });
  