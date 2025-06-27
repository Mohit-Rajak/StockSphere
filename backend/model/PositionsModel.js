const mongoose = require('mongoose');
const { PositionsSchema } = require('../schemas/PositionsSchema');  // Import the schema

// Define the model
const PositionsModel = mongoose.model('Position', PositionsSchema);

module.exports = PositionsModel;  // Export the model
