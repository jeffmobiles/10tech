
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String },
  username: {type: String},
  pass: { type: String },
  token: {type: String},
})

mongoose.model('User',UserSchema);