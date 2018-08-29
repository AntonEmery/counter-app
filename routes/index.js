const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');
const fs = require('fs');


router.get('/', function(req, res) {
  let data = fs.readFileSync('./data.txt', 'utf8');
  let number = parseInt(data);
  res.render('index', { number });
})

router.post('/', countController.increment);

router.get('/view', countController.readFile);

module.exports = router;