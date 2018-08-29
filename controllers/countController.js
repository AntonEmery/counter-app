const fs = require('fs');

exports.increment = (req, res) => {
  let data = fs.readFileSync('./data.txt', 'utf8');
  let number = parseInt(data);
  number++;
  fs.writeFile('./data.txt', number, function() {
    res.render('index', { number });
  });
}

exports.readFile = (req, res) => {
  let number = fs.readFileSync('./data.txt', 'utf8');
  res.render('view', { number })
}