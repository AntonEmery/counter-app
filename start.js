const app = require('./app');
const ip = require('ip')

app.set('port', process.env.port || 7777);
const server = app.listen(7777, ip.address(), () => {
  console.log(`App running at ${ip.address()}:7777 and ${ip.address()}:7777/view` );
})

const io = require('socket.io')(server);

app.set('socketio', io)



