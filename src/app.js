const Koa =  require('koa');

const middlewares = require('./middlewares');
const { port } = require('./config');

const app = new Koa();

const configServer = async () => {
  middlewares(app);
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