const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
})

router.get('/view', function(req, res) {
  res.render('view')
})

module.exports = router;