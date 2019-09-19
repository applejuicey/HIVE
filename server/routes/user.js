const express = require('express');
const router = express.Router();

// base: /user
router.get('/all', function (req, res) {
  res.send('get all')
});

// define the about route
router.get('/:userID', function (req, res) {
  res.send('get by id')
});

module.exports = router;

