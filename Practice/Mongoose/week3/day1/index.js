const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config()
const app = express();
const { connection } = require("./db");
const { Usermodel } = require("./user.model");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, age } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const new_user = new Usermodel({ email, password: hash, name, age });
    await new_user.save();
    res.send("Signup successful");
  } catch (error) {
    console.log("error in signup");
    console.error(error);
  }
});


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const new_user = await Usermodel.findOne({ email });
    if (!new_user) {
      res.send("Please signup");
    }
    const hash = new_user.password;
    const correct_password = bcrypt.compareSync(password, hash);
    if (correct_password) {
      var token = jwt.sign({ userId:new_user._id }, process.env.JWT_SECRET);
      res.send({ msg: "login successfull", token: token });
    } else {
      res.send("Login failed");
    }
  } catch (error) {
    console.log("error in signup");
    console.error(error);
  }
});


app.get("/reports", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.send("Please Login");
    }
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (decoded) {
        res.send("Here are the reports");
      } else {
        res.send("Please Login");
      }
    });
  } catch (error) {
    console.log(error);
    console.log("error in reports");
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection successful");
  } catch (error) {
    console.log(error);
    console.log("error in connection");
  }
});