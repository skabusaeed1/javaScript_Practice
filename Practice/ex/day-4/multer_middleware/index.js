const express = require("express");
const app = express();
const multer = require("multer");

const uploaded = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("users_file");

app.post("/upload", uploaded,(req, res) => {
  res.send("file successfully uploaded");
});

app.listen(5000);
