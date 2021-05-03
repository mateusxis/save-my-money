const { Schema, model } = require("mongoose");

const SubcategorySchema = new Schema(
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

module.exports = model("Subcategory", SubcategorySchema);
