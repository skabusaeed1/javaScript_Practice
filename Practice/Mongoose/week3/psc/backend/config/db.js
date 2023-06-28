const mongoose = require("mongoose");

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/psc");
const connection = mongoose.connect(
  "mongodb+srv://shaikhabusaeed1:Abusaeed1@cluster0.uiljckg.mongodb.net/psc"
);

module.exports = { connection };
