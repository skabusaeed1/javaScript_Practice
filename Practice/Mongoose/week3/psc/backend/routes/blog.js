const express = require("express");
const blogrouter = express.Router();
const { Blogmodel } = require("../models/blog.model");
const { authentication } = require("../middleware/authentication");

blogrouter.get("/", async (req, res) => {
  const user = await Blogmodel.find();
  res.send(user);
});

blogrouter.post("/create", async (req, res) => {
  const { title, description, category } = req.body;
  const author_id = req.userId;
  const user = new Blogmodel({ title, description, category, author_id });
  await user.save();
  res.send("Blog created successfully");
});

blogrouter.delete("/delete/:blogId", async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.userId;
    const user = await Blogmodel.findOne({ _id: blogId });
    if (user.author_id === userId) {
      await Blogmodel.findOneAndDelete({ _id: blogId });
      res.send({ msg: "Blog successfully deleted" });
    } else {
      res.send("You are not authorized to delete this blog");
    }
  } catch (error) {
    console.log("error in deleting blog");
  }
});

module.exports = { blogrouter };
