const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  state: {
    basket: [{ title: String, url: String, price: String, content: String }],
  },
});

module.exports = mongoose.model("User", UserSchema);
