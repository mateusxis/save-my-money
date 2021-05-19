const originModel = require("../models/origin");

const deleteOrigin = async (ctx) => {
  const { id } = ctx.params;

  await originModel.deleteOne({ _id: id });

  ctx.body = "Origin deleted";
};

const indexOrigin = async (ctx) => {
  const { id } = ctx.params;

  const origin = await originModel.findById(id);

  ctx.body = { origin };
};

const showOrigin = async (ctx) => {
  const origins = await originModel.find({});

  ctx.body = { origins };
};

const storeOrigin = async (ctx) => {
  const { name } = ctx.request.body;

  const origin = await originModel.create({
    name
  });

  ctx.body = { origin };
};

const updateOrigin = async (ctx) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  await originModel.findByIdAndUpdate(id, {
    name
  });

  ctx.redirect(`/origin/${id}`);
};

module.exports = {
  deleteOrigin,
  indexOrigin,
  showOrigin,
  storeOrigin,
  updateOrigin,
};
