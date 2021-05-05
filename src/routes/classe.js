const Router = require("koa-router");

const classeController = require("../controllers/classe");

module.exports = () => {
  const router = new Router({});

  router.get("classeGet", "/", classeController.showClasse);
  router.post("classePost", "/", classeController.storeClasse);
  router.get("classeList", "/:id", classeController.indexClasse);
  router.put("classeEdit", "/:id", classeController.updateClasse);
  router.delete("classeDelete", "/:id", classeController.deleteClasse);

  return router;
};
