const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  role: { type: String },
  identification: { type: String },
  state: { type: String },
  phoneNumber: { type: String },
  password: { type: String },
  email: { type: String, lowercase: true, unique: true, sparse: true },
});

module.exports = model('User', userSchema);
