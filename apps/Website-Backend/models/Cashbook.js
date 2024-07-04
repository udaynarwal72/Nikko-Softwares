import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import User from './user.model'; // Import the User model
import Master from './master.model'; // Import the Master model
import ItemList from './itemlist.model'; // Import the ItemList model

const cashbookSchema = new Schema({
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  creditTable: [{
    creditDate: { type: Date, required: true },
    reciptNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    typeOfAcc: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  debitTable: [{
    debitDate: { type: Date, required: true },
    voucherNumber: { type: Number, required: true },
    AccNumber: { type: Number, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    type: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    group: { type: String, required: true, ref: 'ItemList' }, // Reference to the ItemList schema
    amount: { type: Number, required: true }
  }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const Cashbook = model('Cashbook', cashbookSchema);

export default Cashbook;
