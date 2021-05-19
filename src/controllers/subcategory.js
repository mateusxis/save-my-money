const subcategoryModel = require("../models/subcategory");

const deleteSubcategory = async (ctx) => {
  const { id } = ctx.params;

  await subcategoryModel.deleteOne({ _id: id });

  ctx.body = "Subcategory deleted";
};

const indexSubcategory = async (ctx) => {
  const { id } = ctx.params;

  const subcategory = await subcategoryModel.findById(id);

  ctx.body = { subcategory };
};

const showSubcategory = async (ctx) => {
  const categories = await subcategoryModel.find({});

  ctx.body = { categories };
};

const storeSubcategory = async (ctx) => {
  const { name } = ctx.request.body;

  const subcategory = await subcategoryModel.create({
    name
  });

  ctx.body = { subcategory };
};

const updateSubcategory = async (ctx) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  await subcategoryModel.findByIdAndUpdate(id, {
    name
  });

  ctx.redirect(`/subcategory/${id}`);
};

module.exports = {
  deleteSubcategory,
  indexSubcategory,
  showSubcategory,
  storeSubcategory,
  updateSubcategory,
};
