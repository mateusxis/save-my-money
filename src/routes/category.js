const Router = require("koa-router");

const categoryController = require("../controllers/category");

module.exports = () => {
  const router = new Router({});

  router.get("categoryGet", "/", categoryController.showCategory);
  router.post("categoryPost", "/", categoryController.storeCategory);
  router.get("categoryList", "/:id", categoryController.indexCategory);
  router.put("categoryEdit", "/:id", categoryController.updateCategory);
  router.delete("categoryDelete", "/:id", categoryController.deleteCategory);

  return router;
};
