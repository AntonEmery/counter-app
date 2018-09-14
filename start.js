const app = require('./app');

app.set('port', process.env.port || 7777);
const server = app.listen(7777, '192.168.0.102', () => {
  console.log(`App running on port ${server.address().port}`);
})

const io = require('socket.io')(server);

app.set('socketio', io)



