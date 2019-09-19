const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hello World! get home')
});

router.post('/', function (req, res) {
  res.send('Got a POST request home')
});

router.put('/', function (req, res) {
  res.send('Got a PUT request home')
});

router.delete('/', function (req, res) {
  res.send('Got a DELETE request home')
});

module.exports = router;