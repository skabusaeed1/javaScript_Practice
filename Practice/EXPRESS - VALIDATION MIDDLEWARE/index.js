const express = require("express");
const app = express();

const md = (req, res, next) => {
  //   const { ID, Name, Rating, Description, Genre, Cast } = req.body;
  console.log("hello");
  if (req.body.ID) {
    if (
      typeof ID === "number"
      //   typeof Name == "string" &&
      //   typeof Rating == "number" &&
      //   typeof Description == "string" &&
      //   typeof Genre == "string" &&
      //   Array.isArray(Cast)
    ) {
    }
    next();
  } else {
    return res.status(400).json({ error: "something went wrong" });
  }
};

// app.use(md);

app.post("/movies", md, (req, res) => {
  res.status(200).json(req.body);
  console.log("HI");
});

app.listen(4000);
