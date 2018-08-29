const fs = require('fs');

exports.increment = () => {
  let data = fs.readFileSync('./data.txt', 'utf8');
  let number = parseInt(data);
  number++;
  console.log(number);
}