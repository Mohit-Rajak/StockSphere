const mongoose = require('mongoose');

// Define the Positions schema
const PositionsSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: { type: Boolean, default: false },
});

module.exports = { PositionsSchema };
