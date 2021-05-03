const { Schema, model } = require("mongoose");

const SectorSchema = new Schema(
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

module.exports = model("Sector", SectorSchema);
