const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const voucherEntrySchema = new Schema({
  openingBalance: { type: Schema.Types.ObjectId, required: true,ref:'OpeningBalance' },
  entryDate: { type: Date, required: true },
  creditTable: [{
    openingBalance: { type: Number, required: true },
    reciptNumber: { type: Number},
    AccNumber: { type: Number, required: true}, // Reference to the ItemList schema
    typeOfAcc: { type: String, required: true }, // Reference to the ItemList schema
    narration: { type: String, required: true },
    group: { type: String, required: true}, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  debitTable: [{
    voucherNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true }, // Reference to the ItemList schema
    type: { type: String, required: true}, // Reference to the ItemList schema
    group: { type: String, required: true }, // Reference to the ItemList schema
    amount: { type: Number, required: true },
    narration: { type: String, required: true },
    closingBalance: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
}, { timestamps: true });

const VoucherEntry = mongoose.model('VoucherEntry', voucherEntrySchema);

module.exports = VoucherEntry;
