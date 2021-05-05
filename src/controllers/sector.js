const sectorModel = require("../models/sector");

const deleteSector = async (ctx) => {
  const { id } = ctx.params;

  await sectorModel.deleteOne({ _id: id });

  ctx.body = "Sector deleted";
};

const indexSector = async (ctx) => {
  const { id } = ctx.params;

  const sector = await sectorModel.findById(id);

  ctx.body = { data: sector };
};

const showSector = async (ctx) => {
  const sectors = await sectorModel.find({});

  ctx.body = { data: sectors };
};

const storeSector = async (ctx) => {
  const { name } = ctx.request.body;

  const sector = await sectorModel.create({
    name
  });

  ctx.body = { data: sector };
};

const updateSector = async (ctx) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  await sectorModel.findByIdAndUpdate(id, {
    name
  });

  ctx.redirect(`/sector/${id}`);
};

module.exports = {
  deleteSector,
  indexSector,
  showSector,
  storeSector,
  updateSector,
};
