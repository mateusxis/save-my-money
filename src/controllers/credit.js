const creditModel = require("../models/credit");

const deleteCredit = async (ctx) => {
  const { id } = ctx.params;

  await creditModel.deleteOne({ _id: id });

  ctx.body = "Credit deleted";
};

const indexCredit = async (ctx) => {
  const { id } = ctx.params;

  const credit = await creditModel.findById(id);

  ctx.body = { credit };
};

const showCredit = async (ctx) => {
  const credits = await creditModel.find({});

  ctx.body = { credits };
};

const storeCredit = async (ctx) => {
  const { description, value, date_payment, origin_id } = ctx.request.body;

  const credit = await creditModel.create({
    description,
    value,
    date_payment,
    origin_id,
  });

  ctx.body = { credit };
};

const updateCredit = async (ctx) => {
  const { description, value, date_payment, origin_id } = ctx.request.body;
  const { id } = ctx.params;

  await creditModel.findByIdAndUpdate(id, {
    description,
    value,
    date_payment,
    origin_id,
  });

  ctx.redirect(`/credit/${id}`);
};

module.exports = {
  deleteCredit,
  indexCredit,
  showCredit,
  storeCredit,
  updateCredit,
};
