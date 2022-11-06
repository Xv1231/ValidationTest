const mongoose = require('mongoose');

const users = new mongoose.Schema({
  ID: {
    _id: mongoose.Schema.Types.ObjectId,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
});
const Users = mongoose.model('Users', users);
module.exports = Users;
