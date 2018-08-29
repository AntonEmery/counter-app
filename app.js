const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const path = require('path');
const helpers = require('./helpers');

const app = express();

// setup views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
})

// import routes
app.use('/', routes);

module.exports = app;
