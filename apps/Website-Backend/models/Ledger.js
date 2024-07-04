import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import User from './user.model'; // Import the User model
import Master from './master.model'; // Import the Master model
import ItemList from './itemlist.model'; // Import the ItemList model

const ledgerSchema = new Schema({
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  ledgerHeading: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
  creditTable: [{
    creditDate: { type: Date, required: true },
    reciptNumber: { type: Number, required: true },
    narration: { type: String, required: true },
    cashBookPageNumber: { type: Number, required: true },
    amount: { type: Number, required: true }
  }],
  debitTable: [{
    debitDate: { type: Date, required: true },
    voucherNumber: { type: Number, required: true },
    narration: { type: String, required: true },
    cashBookPageNumber: { type: Number, required: true },
    amount: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const Ledger = model('Ledger', ledgerSchema);

export default Ledger;
