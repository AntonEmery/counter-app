const app = require('./app');
const ip = require('ip')

app.set('port', process.env.port || 7777);
const server = app.listen(7777, ip.address(), () => {
  console.log(`App running on port ${server.address().port}`);
})

const io = require('socket.io')(server);

app.set('socketio', io)



