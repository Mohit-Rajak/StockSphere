const mongoose = require('mongoose');
const { HoldingsSchema } = require('../schemas/HoldingsSchema');

// Define the model using the schema
const HoldingsModel = mongoose.model('Holding', HoldingsSchema);

// Export the model
module.exports = HoldingsModel;

