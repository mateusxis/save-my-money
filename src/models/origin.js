const { Schema, model } = require("mongoose");

const OriginSchema = new Schema(
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

module.exports = model("Origin", OriginSchema);
