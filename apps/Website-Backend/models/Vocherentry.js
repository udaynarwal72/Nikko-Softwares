const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model'); // Import the User model
const Master = require('./master.model'); // Import the Master model
const ItemList = require('./itemlist.model'); // Import the ItemList model

const voucherEntrySchema = new Schema({
  openingBalance: { type: Number, required: true },
  entryDate: { type: Date, required: true },
  creditTable: [{
    reciptNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    typeOfAcc: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  debitTable: [{
    voucherNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    type: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
}, { timestamps: true });

const VoucherEntry = mongoose.model('VoucherEntry', voucherEntrySchema);

module.exports = VoucherEntry;
