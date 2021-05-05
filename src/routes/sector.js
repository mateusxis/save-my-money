const Router = require("koa-router");

const sectorController = require("../controllers/sector");

module.exports = () => {
  const router = new Router({});

  router.get("sectorGet", "/", sectorController.showSector);
  router.post("sectorPost", "/", sectorController.storeSector);
  router.get("sectorList", "/:id", sectorController.indexSector);
  router.put("sectorEdit", "/:id", sectorController.updateSector);
  router.delete("sectorDelete", "/:id", sectorController.deleteSector);

  return router;
};
