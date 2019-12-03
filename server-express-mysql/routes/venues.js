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
  

module.exports = router;