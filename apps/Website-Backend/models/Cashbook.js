const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.model'); // Import the User model
const Master = require('./master.model'); // Import the Master model
const ItemList = require('./itemlist.model'); // Import the ItemList model

const cashbookSchema = new Schema({
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  creditTable: [{
    openingBalance: { type: Number, required: true },
    creditDate: { type: Date, required: true },
    reciptNumber: { type: Number},
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    typeOfAcc: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    narration: { type: String, required: true },
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  debitTable: [{
    debitDate: { type: Date, required: true },
    voucherNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    type: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true },
    narration: { type: String, required: true },
    closingBalance: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const Cashbook = mongoose.model('Cashbook', cashbookSchema);

module.exports = Cashbook;
