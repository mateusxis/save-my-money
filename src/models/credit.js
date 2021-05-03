const { Schema, model } = require("mongoose");

const CreditSchema = new Schema(
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
    origin_id: {
      type: Schema.Types.ObjectId,
      ref: "Origin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Credit", CreditSchema);
