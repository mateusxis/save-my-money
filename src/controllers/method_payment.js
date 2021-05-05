const methodPaymentModel = require("../models/method_payment");

const deleteMethodPayment = async (ctx) => {
  const { id } = ctx.params;

  await methodPaymentModel.deleteOne({ _id: id });

  ctx.body = "MethodPayment deleted";
};

const indexMethodPayment = async (ctx) => {
  const { id } = ctx.params;

  const methodPayment = await methodPaymentModel.findById(id);

  ctx.body = { data: methodPayment };
};

const showMethodPayment = async (ctx) => {
  const methodPayments = await methodPaymentModel.find({});

  ctx.body = { data: methodPayments };
};

const storeMethodPayment = async (ctx) => {
  const { name } = ctx.request.body;

  const methodPayment = await methodPaymentModel.create({
    name
  });

  ctx.body = { data: methodPayment };
};

const updateMethodPayment = async (ctx) => {
  const { name } = ctx.request.body;
  const { id } = ctx.params;

  await methodPaymentModel.findByIdAndUpdate(id, {
    name
  });

  ctx.redirect(`/methodPayment/${id}`);
};

module.exports = {
  deleteMethodPayment,
  indexMethodPayment,
  showMethodPayment,
  storeMethodPayment,
  updateMethodPayment,
};
