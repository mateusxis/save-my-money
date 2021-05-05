const Router = require("koa-router");

module.exports = () => {
  const router = new Router();
  const categoryRouter = require("./category");
  const classeRouter = require("./classe");
  const creditRouter = require("./credit");
  const debitRouter = require("./debit");
  const methodPaymentRouter = require("./method_payment");
  const operationRouter = require("./operation");
  const originRouter = require("./origin");
  const sectorRouter = require("./sector");
  const subcategoryRouter = require("./subcategory");
  const userRouter = require("./user");

  router.use("/category", categoryRouter().routes(), categoryRouter().allowedMethods());
  router.use("/classe", classeRouter().routes(), classeRouter().allowedMethods());
  router.use("/credit", creditRouter().routes(), creditRouter().allowedMethods());
  router.use("/debit", debitRouter().routes(), debitRouter().allowedMethods());
  router.use("/methodPayment", methodPaymentRouter().routes(), methodPaymentRouter().allowedMethods());
  router.use("/operation", operationRouter().routes(), operationRouter().allowedMethods());
  router.use("/origin", originRouter().routes(), originRouter().allowedMethods());
  router.use("/sector", sectorRouter().routes(), sectorRouter().allowedMethods());
  router.use("/subcategory", subcategoryRouter().routes(), subcategoryRouter().allowedMethods());
  router.use("/user", userRouter().routes(), userRouter().allowedMethods());

  return router;
};
