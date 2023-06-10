const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.send("All users");
});
usersRouter.get("/active", (req, res) => {
  res.send("Active users");
});
usersRouter.get("/subscribe", (req, res) => {
  res.send("Subscribed users");
});
usersRouter.get("/inactive", (req, res) => {
  res.send("Inactive users");
});

module.exports={usersRouter};