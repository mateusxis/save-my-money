const Router = require("koa-router");

const originController = require("../controllers/origin");

module.exports = () => {
  const router = new Router({});

  router.get("originGet", "/", originController.showOrigin);
  router.post("originPost", "/", originController.storeOrigin);
  router.get("originList", "/:id", originController.indexOrigin);
  router.put("originEdit", "/:id", originController.updateOrigin);
  router.delete("originDelete", "/:id", originController.deleteOrigin);

  return router;
};
