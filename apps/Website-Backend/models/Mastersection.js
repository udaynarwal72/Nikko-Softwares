const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js'); // Import the User model

const masterSchema = new Schema({
  section: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
});

const Master = mongoose.model('Master', masterSchema);

module.exports = Master;
