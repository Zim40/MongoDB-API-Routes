const { Schema, model } = require('mongoose');

// Define 'User' Schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "Thoughts",
  },
  friends: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  toJSON: {
    getters: true,
    virtuals: true,
  },

  virtuals: {
    friendCount: {
      get() {
        return this.friends.length;
      },
    },
  },
});

// Create instance of User model
const User = model('user', userSchema);

// Export User model to ./models/index.js
module.exports = User;