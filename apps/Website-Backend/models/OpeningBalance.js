const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User.js'); // Import the User model



const openingBalanceschema = new Schema({
    cash: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
    masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const openingBalance = mongoose.model('AddBankDetails', openingBalanceschema);

module.exports = openingBalance;
