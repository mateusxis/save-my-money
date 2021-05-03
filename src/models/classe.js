const { Schema, model } = require("mongoose");

const ClasseSchema = new Schema(
  {
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    subcategory_id: {
      type: Schema.Types.ObjectId,
      ref: "Subcategory",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Classe", ClasseSchema);
