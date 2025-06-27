const mongoose = require('mongoose');
const {UserSchema} = require ('../schemas/UserSchema.js');

const User = mongoose.model('User' , UserSchema);

module.exports = User;