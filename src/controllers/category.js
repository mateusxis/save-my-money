const categoryModel = require("../models/category");

const deleteCategory = async (ctx) => {
  const { id } = ctx.params;

  await categoryModel.deleteOne({ _id: id });

  ctx.body = "Category deleted";
};

const indexCategory = async (ctx) => {
  const { id } = ctx.params;

  const category = await categoryModel.findById(id);

  ctx.body = { category };
};

const showCategory = async (ctx) => {
  const categories = await categoryModel.find({});

  ctx.body = { categories };
};

const storeCategory = async (ctx) => {
  const { name } = ctx.request.body;

  const category = await categoryModel.create({
    name
  });

  ctx.body = { category };
};

const updateCategory = async (ctx) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  await categoryModel.findByIdAndUpdate(id, {
    name
  });

  ctx.redirect(`/category/${id}`);
};

module.exports = {
  deleteCategory,
  indexCategory,
  showCategory,
  storeCategory,
  updateCategory,
};
