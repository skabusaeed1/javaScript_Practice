const express = require("express");
const app = express();

// const md = (req, res, next) => {
//   let startTime = new Date().getTime();
//   next();
//   let endTime= new Date().getTime();
//   console.log(endTime-startTime);
// };
// app.use(md);

// app.get("/", (req, res) => {
//   res.send(`Welcome`);
// });

const logger = (req, res, next) => {
  next();
  console.log(req.method," ",req.url);
};

app.use(logger);
app.get("/about", (req, res) => {
  res.send("hello");
});

app.listen("8000");
