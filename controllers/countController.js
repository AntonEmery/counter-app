const fs = require('fs');

exports.increment = (req, res) => {
  var io = req.app.get('socketio');
  let data = fs.readFileSync('./data.txt', 'utf8');
  let number = parseInt(data);
  number++;
  fs.writeFile('./data.txt', number, function() {
    io.emit('updateCounter', { data: number });
    res.redirect('/');
  });

}

exports.readFile = (req, res) => {
  let number = fs.readFileSync('./data.txt', 'utf8');
  res.render('view', { number })
}