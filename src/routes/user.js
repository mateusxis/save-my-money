const Router = require("koa-router");

const userController = require("../controllers/user");

module.exports = () => {
  const router = new Router({});

  router.get("userGet", "/", userController.showUser);
  router.post("userPost", "/", userController.storeUser);
  router.get("userList", "/:id", userController.indexUser);
  router.put("userEdit", "/:id", userController.updateUser);
  router.delete("userDelete", "/:id", userController.deleteUser);

  return router;
};
