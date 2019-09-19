const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Article = require('../models/Article');

router.get('/', function(req, res, next) {
  res.send('Hello World! get')
});



router.post('/', function (req, res) {
  res.send('Got a POST request')
});

router.put('/', function (req, res) {
  res.send('Got a PUT request')
});

router.delete('/', function (req, res) {
  res.send('Got a DELETE request')
});

module.exports = router;