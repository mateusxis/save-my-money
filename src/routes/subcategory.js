const Router = require("koa-router");

const subcategoryController = require("../controllers/subcategory");

module.exports = () => {
  const router = new Router({});

  router.get("subcategoryGet", "/", subcategoryController.showSubcategory);
  router.post("subcategoryPost", "/", subcategoryController.storeSubcategory);
  router.get("subcategoryList", "/:id", subcategoryController.indexSubcategory);
  router.put("subcategoryEdit", "/:id", subcategoryController.updateSubcategory);
  router.delete("subcategoryDelete", "/:id", subcategoryController.deleteSubcategory);

  return router;
};
