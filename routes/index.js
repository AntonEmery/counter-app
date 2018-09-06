const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');
const fs = require('fs');

// load the home page
router.get('/', function(req, res) {
  let data = fs.readFileSync(__dirname + '/../../data.txt', 'utf8');
  let number = parseInt(data);
  res.render('index', { number });
})

router.post('/', countController.increment);

// load the view page
router.get('/view', countController.viewPage);

module.exports = router;