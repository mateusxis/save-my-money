const Router = require("koa-router");

const creditController = require("../controllers/credit");

module.exports = () => {
  const router = new Router({});

  router.get("creditGet", "/", creditController.showCredit);
  router.post("creditPost", "/", creditController.storeCredit);
  router.get("creditList", "/:id", creditController.indexCredit);
  router.put("creditEdit", "/:id", creditController.updateCredit);
  router.delete("creditDelete", "/:id", creditController.deleteCredit);

  return router;
};
