const { Schema, model } = require("mongoose");

const ClasseSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategoryId: {
      type: Schema.Types.ObjectId,
      ref: "Subcategory",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Classe", ClasseSchema);
