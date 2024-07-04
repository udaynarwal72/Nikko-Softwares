import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const UserSchema = new Schema({
  id: { type: String, required: true, unique: true  },
  password: { type: String, required: true },
  collegeName: { type: String, required: true },
});

const User = model('User', UserSchema);

export default User;
