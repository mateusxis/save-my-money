const debitModel = require("../models/debit");

const deleteDebit = async (ctx) => {
  const { id } = ctx.params;

  await debitModel.deleteOne({ _id: id });

  ctx.body = "Debit deleted";
};

const indexDebit = async (ctx) => {
  const { id } = ctx.params;

  const debit = await debitModel.findById(id);

  ctx.body = { data: debit };
};

const showDebit = async (ctx) => {
  const debits = await debitModel.find({});

  ctx.body = { data: debits };
};

const storeDebit = async (ctx) => {
  const {
    description,
    value,
    date_payment,
    is_pay,
    classe_id,
    sector_id,
    method_payment_id,
  } = ctx.request.body;

  const debit = await debitModel.create({
    description,
    value,
    date_payment,
    is_pay,
    classe_id,
    sector_id,
    method_payment_id,
  });

  ctx.body = { data: debit };
};

const updateDebit = async (ctx) => {
  const {
    description,
    value,
    date_payment,
    is_pay,
    classe_id,
    sector_id,
    method_payment_id,
  } = ctx.request.body;
  const { id } = ctx.params;

  await debitModel.findByIdAndUpdate(id, {
    description,
    value,
    date_payment,
    is_pay,
    classe_id,
    sector_id,
    method_payment_id,
  });

  ctx.redirect(`/debit/${id}`);
};

module.exports = {
  deleteDebit,
  indexDebit,
  showDebit,
  storeDebit,
  updateDebit,
};
