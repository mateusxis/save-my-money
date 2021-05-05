const Router = require("koa-router");

const debitController = require("../controllers/debit");

module.exports = () => {
  const router = new Router({});

  router.get("debitGet", "/", debitController.showDebit);
  router.post("debitPost", "/", debitController.storeDebit);
  router.get("debitList", "/:id", debitController.indexDebit);
  router.put("debitEdit", "/:id", debitController.updateDebit);
  router.delete("debitDelete", "/:id", debitController.deleteDebit);

  return router;
};
