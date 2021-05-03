const { Schema, model } = require("mongoose");

const OperationSchema = new Schema(
  {
    balance_last: {
        type: Float,
        required: true
    },
    balance_now: {
        type: Float,
        required: true
    },
    rollback: Date,
    credit_id: {
      type: Schema.Types.ObjectId,
      ref: "Credit",
    },
    debit_id: {
      type: Schema.Types.ObjectId,
      ref: "Debit",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Operation", OperationSchema);
