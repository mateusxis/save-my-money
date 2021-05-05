const Router = require("koa-router");

const methodPaymentController = require("../controllers/method_payment");

module.exports = () => {
  const router = new Router({});

  router.get("methodPaymentGet", "/", methodPaymentController.showMethodPayment);
  router.post("methodPaymentPost", "/", methodPaymentController.storeMethodPayment);
  router.get("methodPaymentList", "/:id", methodPaymentController.indexMethodPayment);
  router.put("methodPaymentEdit", "/:id", methodPaymentController.updateMethodPayment);
  router.delete("methodPaymentDelete", "/:id", methodPaymentController.deleteMethodPayment);

  return router;
};
