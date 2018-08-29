const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');


router.get('/', function(req, res) {
  res.render('index', {number: 5});
})

router.post('/', countController.increment);

router.get('/view', function(req, res) {
  res.render('view', {number: 5})
})

module.exports = router;