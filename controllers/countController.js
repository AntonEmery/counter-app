const fs = require('fs');

exports.increment = (req, res) => {
  var io = req.app.get('socketio');
  if(req.body.custom_number) {
    fs.writeFile('./data.txt', req.body.custom_number, function() {
      io.emit('updateCounter', { data: req.body.custom_number });
      res.redirect('/');
      return;
    });
  } else {
    let data = fs.readFileSync('./data.txt', 'utf8');
    let number = parseInt(data);
    number++;
    fs.writeFile('./data.txt', number, function() {
      io.emit('updateCounter', { data: number });
      res.redirect('/');
    });
  }
}

exports.readFile = (req, res) => {
  let number = fs.readFileSync('./data.txt', 'utf8');
  res.render('view', { number })
}