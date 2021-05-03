const { Schema, model } = require("mongoose");

const MethodPaymentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("MethodPayment", MethodPaymentSchema);
