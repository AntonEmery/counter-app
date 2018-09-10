const express = require('express');
const router = express.Router();
const countController = require('../controllers/countController');
// const fs = require('fs');

const r = function() { return require(arguments[0][0]) };
const pathFor = (...args) => path.join(...args)
const [os, fs, path] = [r`os`, r`fs`, r`path`];
const currentDir = path.resolve();

// load the home page
router.get('/', function(req, res) {
  let data = fs.readFileSync(pathFor(currentDir + '/data.txt'), 'utf8');
  let number = parseInt(data);
  res.render('index', { number });
})

router.post('/', countController.increment);
router.post('/customNumber', countController.customNumber);

// load the view page
router.get('/view', countController.viewPage);

module.exports = router;