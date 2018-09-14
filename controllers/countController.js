// const fs = require('fs');

const r = function() { return require(arguments[0][0]) };
const pathFor = (...args) => path.join(...args)
const [os, fs, path] = [r`os`, r`fs`, r`path`];
// get current dir
const currentDir = path.resolve();


exports.customNumber = (req, res) => {
  // allows use of socket.io in routes
  var io = req.app.get('socketio');
  // if the number input contains a number
  if(req.body.custom_number) {
    // write that number to the text file
    fs.writeFile(pathFor(currentDir + '/data.txt'), req.body.custom_number, function() {
      // push that number to the view page via socket.io
      io.emit('updateCounter', { data: req.body.custom_number });
      // reload the home page
      res.redirect('/');
      return;
    });
  }
}

exports.increment = (req, res) => {
   // allows use of socket.io in routes
   var io = req.app.get('socketio');
  // read current number from the text file
  let data = fs.readFileSync(pathFor(currentDir + '/data.txt'), 'utf8');
  // turn it into a number
  let number = parseInt(data);
  // increase it by one
  number++;
  // write the incremented number back to the text file, push it out to the view page, reload the home page
  fs.writeFile(pathFor(currentDir + '/data.txt'), number, function() {
    io.emit('updateCounter', { data: number });
    res.redirect('/');
  });
}

exports.viewPage = (req, res) => {
  let number = fs.readFileSync(pathFor(currentDir + '/data.txt'), 'utf8');
  res.render('view', { number })
}