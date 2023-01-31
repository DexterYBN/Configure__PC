const mongoose = require("mongoose");

const configureSchema = mongoose.Schema({
  processor: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  motherboard: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  ram: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  graphics: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  ssd: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  hdd: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  compCase: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  power: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  sound: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  os: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  mouse: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  keyboard: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  monitor: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  headset: {
    type: mongoose.Schema.Types.ObjectId,
    require: false,
    ref: 'Accessories'
  },
  cost: {
    type: Number,
    require: false,
    default: 0
  },
});

const Configure = mongoose.model("Configure", configureSchema);

module.exports = Configure;
