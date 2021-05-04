const userModel = require("../models/user");

const deleteUser = async (ctx) => {
    const { id } = ctx.params;

  await userModel.deleteOne({ _id: id }, () => {
    // if (err) ctx.throw(err);

    return ctx.body = "User deleted";
  });
};

const indexUser = async (ctx) => {
  const { id } = ctx.params;

  await userModel.findById(id, (err, loggedUser) => {
    // if (err) ctx.throw(err);

    return ctx.body = { data: loggedUser };
  });
};

const showUser = async (ctx) => {
  await userModel.find({}, (err, users) => {
    // if (err) ctx.throw(err);

    return ctx.body = { data: users };
  });
};

const storeUser = async (ctx) => {
  const { nickname, email, password } = ctx.request.body;

  await userModel.create(
    {
      nickname,
      email,
      password,
    },
    (err, user) => {
      // if (err) ctx.throw(err);

      return ctx.body = { data: user };
    }
  );
};

const updateUser = async (ctx) => {
  const { nickname, email, password } = ctx.request.body;
  const { id } = ctx.params;

  await userModel.findByIdAndUpdate(
    id,
    { nickname, email, password },
    (err, user) => {
      // if (err) ctx.throw(err);

      return ctx.body = { data: user };
    }
  );
};

module.exports = {
  deleteUser,
  indexUser,
  showUser,
  storeUser,
  updateUser,
};
