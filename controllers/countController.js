const fs = require('fs');

exports.increment = (req, res) => {
  // allows use of socket.io in routes
  var io = req.app.get('socketio');
  // if the number input contains a number
  if(req.body.custom_number) {
    // write that number to the text file
    fs.writeFile(__dirname + '/../../data.txt', req.body.custom_number, function() {
      // push that number to the view page via socket.io
      io.emit('updateCounter', { data: req.body.custom_number });
      // reload the home page
      res.redirect('/');
      return;
    });
    // if the input does not contain a number then they must have wanted to increment it.
  } else {
    // read current number from the text file
    let data = fs.readFileSync(__dirname + '/../../data.txt', 'utf8');
    // turn it into a number
    let number = parseInt(data);
    // increase it by one
    number++;
    // write the incremented number back to the text file, push it out to the view page, reload the home page
    fs.writeFile(__dirname + '/../../data.txt', number, function() {
      io.emit('updateCounter', { data: number });
      res.redirect('/');
    });
  }
}

exports.viewPage = (req, res) => {
  let number = fs.readFileSync(__dirname + '/../../data.txt', 'utf8');
  res.render('view', { number })
}