const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model'); // Import the User model
const Master = require('./master.model'); // Import the Master model

const itemListSchema = new Schema({
  acc_no: { type: Number, required: true },
  type_of_account: { type: String, required: true },
  group: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const ItemList = mongoose.model('ItemList', itemListSchema);

module.exports = ItemList;
