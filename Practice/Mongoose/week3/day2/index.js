const express = require("express");
const app = express();
app.use(express.json());

app.get("/login",async (req, res) => {
  res.send("login successfull");
});

app.listen(8000, async () => {
  try {
    //   await connection;
    console.log("connection successful");
  } catch (error) {
    console.log(error);
    console.log("error in connection");
  }
});
