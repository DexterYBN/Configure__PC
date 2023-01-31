const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    image: String,
    image_white: String
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
