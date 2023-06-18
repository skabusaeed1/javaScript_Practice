const express = require("express");
const { connection } = require("./db");
const { Usermodel } = require("./user.model");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("basic end point");
});

app.get("/users", async(req, res) => {
    const user=await Usermodel.find();
    res.send({user});
});

app.post("/users/create", async (req, res) => {
  const { name, age, city } = req.body;
  const user = new Usermodel({
    name,
    age,
    city,
  });
  await user.save();
  res.send("Data has stored successfully");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
