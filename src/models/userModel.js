const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const User = new Schema({
  department_id: ObjectId,
  username: {
    type: String,
    required: true,
    default: `user${Math.random()}`,
    maxLength: 36,
  },
  fullname: { type: String, required: true, default: 'Unknown', maxLength: 50 },
  phone: { type: Number, required: true },
  age: { type: Number, min: 18 },
  bio: { type: String, match: /[a-z]/ },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const UserModel = mongoose.model('User', User);

module.exports = UserModel;
