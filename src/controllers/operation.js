const operationModel = require("../models/operation");

const deleteOperation = async (ctx) => {
  const { id } = ctx.params;

  await operationModel.deleteOne({ _id: id });

  ctx.body = "Operation deleted";
};

const indexOperation = async (ctx) => {
  const { id } = ctx.params;

  const operation = await operationModel.findById(id);

  ctx.body = { data: operation };
};

const showOperation = async (ctx) => {
  const operations = await operationModel.find({});

  ctx.body = { data: operations };
};

const storeOperation = async (ctx) => {
  const {
    balance_last,
    balance_now,
    rollback,
    credit_id,
    debit_id,
  } = ctx.request.body;

  const operation = await operationModel.create({
    balance_last,
    balance_now,
    rollback,
    credit_id,
    debit_id,
  });

  ctx.body = { data: operation };
};

const updateOperation = async (ctx) => {
  const {
    balance_last,
    balance_now,
    rollback,
    credit_id,
    debit_id,
  } = ctx.request.body;
  const { id } = ctx.params;

  await operationModel.findByIdAndUpdate(id, {
    balance_last,
    balance_now,
    rollback,
    credit_id,
    debit_id,
  });

  ctx.redirect(`/operation/${id}`);
};

module.exports = {
  deleteOperation,
  indexOperation,
  showOperation,
  storeOperation,
  updateOperation,
};
