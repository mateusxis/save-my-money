const userModel = require("../models/user");

const deleteUser = async (ctx) => {
  const { id } = ctx.params;

  await userModel.deleteOne({ _id: id });

  ctx.body = "User deleted";
};

const indexUser = async (ctx) => {
  const { id } = ctx.params;

  const user = await userModel.findById(id);

  ctx.body = { data: user };
};

const showUser = async (ctx) => {
  const users = await userModel.find({});

  ctx.body = { data: users };
};

const storeUser = async (ctx) => {
  const { nickname, email, password } = ctx.request.body;

  const user = await userModel.create({
    nickname,
    email,
    password,
  });

  ctx.body = { data: user };
};

const updateUser = async (ctx) => {
  const { nickname, email, password } = ctx.request.body;
  const { id } = ctx.params;

  await userModel.findByIdAndUpdate(id, {
    nickname,
    email,
    password,
  });

  ctx.redirect(`/user/${id}`);
};

module.exports = {
  deleteUser,
  indexUser,
  showUser,
  storeUser,
  updateUser,
};
