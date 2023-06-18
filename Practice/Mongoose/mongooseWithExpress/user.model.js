const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  age: Number,
  city: String,
});

const Usermodel = mongoose.model("user", UserSchema);

module.exports = { Usermodel };
