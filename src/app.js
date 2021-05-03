const Koa =  require('koa');

const middlewares = require('./middlewares');
const database = require('./database');
const { port } = require('./config');

const app = new Koa();

const configServer = async () => {
  middlewares(app);
  database();
};

const startServer = async () => {
  app.listen(port,  () => console.log(`Listening on port ${port}`));
};

module.exports = {
  init: async () => {
    configServer();
    startServer();
  }
}