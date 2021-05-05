const classeModel = require("../models/classe");

const deleteClasse = async (ctx) => {
  const { id } = ctx.params;

  await classeModel.deleteOne({ _id: id });

  ctx.body = "Classe deleted";
};

const indexClasse = async (ctx) => {
  const { id } = ctx.params;

  const classe = await classeModel.findById(id);

  ctx.body = { data: classe };
};

const showClasse = async (ctx) => {
  const classes = await classeModel.find({});

  ctx.body = { data: classes };
};

const storeClasse = async (ctx) => {
  const { category_id, subcategory_id } = ctx.request.body;

  const classe = await classeModel.create({
    category_id,
    subcategory_id,
  });

  ctx.body = { data: classe };
};

const updateClasse = async (ctx) => {
  const { category_id, subcategory_id } = ctx.request.body;
  const { id } = ctx.params;

  await classeModel.findByIdAndUpdate(id, {
    category_id,
    subcategory_id,
  });

  ctx.redirect(`/classe/${id}`);
};

module.exports = {
  deleteClasse,
  indexClasse,
  showClasse,
  storeClasse,
  updateClasse,
};
