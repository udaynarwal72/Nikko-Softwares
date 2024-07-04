import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import User from './User.js'; // Import the User model
import User from './User.js'; // Import the User model


const addBankDetailsSchema = new Schema({
  bank_name: { type: String, required: true },
  account_number: { type: Number, required: true },
  account_balance: { type: Number, required: true },
  cash: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const AddBankDetails = model('AddBankDetails', addBankDetailsSchema);

export default AddBankDetails;
