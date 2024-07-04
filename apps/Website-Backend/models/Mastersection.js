import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import User from './User.js'; // Import the User model

const masterSchema = new Schema({
  section: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User schema
});

const Master = model('Master', masterSchema);

export default Master;
