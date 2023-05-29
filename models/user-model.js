const mongoose = require('mongoose');

const UserDB = mongoose.model(
  'Users',
  {
    name: String,
    uid: String,
    email: String,
  },
  'users'
);

module.exports = { UserDB };
