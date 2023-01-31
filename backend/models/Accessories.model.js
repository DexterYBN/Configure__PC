const mongoose = require("mongoose");

const accessoriesSchema = mongoose.Schema({
  image: String,
  name: {
    type: String,
    required: true,
  },
  cost: Number,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Accessories = mongoose.model("Accessories", accessoriesSchema);

module.exports = Accessories;
