const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();
const { connection } = require("./config/db");
const { Usermodel } = require("./models/user.model");
app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, age } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const user = new Usermodel({ email, password: hash, name, age });
    await user.save();
    res.send("signup successful");
  } catch (error) {
    console.log(error);
    console.log("error in signup");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Usermodel.findOne({ email });
    if (!user.email) {
      res.send("Please signup");
    }
    const correct_password = bcrypt.compareSync(password, hash);
    if (correct_password) {
      var token = jwt.sign({ userId:user._id }, 'mysecret');
      res.send({messege:"login successfully", token:token});
    }
  } catch (error) {
    console.log("error in login");
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection successfully established");
  } catch (error) {
    console.log("error connecting");
    console.log(error);
  }
});
