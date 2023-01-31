const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart: [
    {
      ref: "assemblies",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
