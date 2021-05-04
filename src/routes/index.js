const Router = require("koa-router");

module.exports = () => {
  const router = new Router();
  const userRouter = require("./user");

  router.use(
    "/user",
    userRouter().routes(),
    userRouter().allowedMethods()
  );

  return router;
};
