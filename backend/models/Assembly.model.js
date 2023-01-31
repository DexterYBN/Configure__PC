const mongoose = require("mongoose");

const assemblySchema = mongoose.Schema({
  processor: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  motherboard: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  graphics: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  ram: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  ssd: {
    type: mongoose.Schema.Types.ObjectId,
  },
  hdd: {
    type: mongoose.Schema.Types.ObjectId,
  },
  power: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  compCase: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  image: String,
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  cost: {
    type: Number,
    require: true,
  },
});

const Assembly = mongoose.model("assemblies", assemblySchema);

module.exports = Assembly;
