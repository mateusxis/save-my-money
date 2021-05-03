const { Schema, model } = require("mongoose");

const DebitSchema = new Schema(
  {
    description: {
        type: String,
        required: true
    },
    value: {
        type: Float,
        required: true
    },
    date_payment: Date,
    is_pay: Date,
    classe_id: {
      type: Schema.Types.ObjectId,
      ref: "Classe",
    },
    sector_id: {
      type: Schema.Types.ObjectId,
      ref: "Sector",
    },
    method_payment_id: {
      type: Schema.Types.ObjectId,
      ref: "MethodPayment",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Debit", DebitSchema);
