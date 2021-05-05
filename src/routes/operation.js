const Router = require("koa-router");

const operationController = require("../controllers/operation");

module.exports = () => {
  const router = new Router({});

  router.get("operationGet", "/", operationController.showOperation);
  router.post("operationPost", "/", operationController.storeOperation);
  router.get("operationList", "/:id", operationController.indexOperation);
  router.put("operationEdit", "/:id", operationController.updateOperation);
  router.delete("operationDelete", "/:id", operationController.deleteOperation);

  return router;
};
