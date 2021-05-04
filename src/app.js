const Koa = require("koa");
const mongoose = require("mongoose");

const middlewares = require('./middlewares');
const database = require('./database');
const routesFactory = require('./routes');

const { port } = require('./config');

const app = new Koa();
const routes = routesFactory();


const configServer = async () => {
  middlewares(app);
  app
  .use(routes.routes())
  .use(routes.allowedMethods());
  database();
};

const startServer = async () => {
  app.listen(port, () => console.log(`Listening on port ${port}`));
};

module.exports = {
  init: async () => {
    configServer();
    startServer();
  },
};
