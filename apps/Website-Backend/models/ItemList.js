import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import User from './user.model'; // Import the User model
import Master from './master.model'; // Import the Master model

const itemListSchema = new Schema({
  acc_no: { type: Number, required: true },
  type_of_account: { type: String, required: true },
  group: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
  masterId: { type: Schema.Types.ObjectId, ref: 'Master', required: true } // Reference to the Master schema
});

const ItemList = model('ItemList', itemListSchema);

export default ItemList;
