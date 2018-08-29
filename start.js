const app = require('./app');

app.set('port', process.env.port || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`App running on port ${server.address().port}`);
})