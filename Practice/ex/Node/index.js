// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/todos") {
//     fs.readFile("./todos.json","utf-8",(err,data)=>{
//         if(err){
//             res.end("Something went wrong");
//         }
//         else{
//             res.end(data);
//         }
//     });
//   } else {
//     res.end("Hello");
//   }
// });

// server.listen(8000);

// express

const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Holle It is my first express server");
});

app.get("/welcome", (req, res) => {
  let name = req.query.name;
  res.send(`Hello ${name}`);
});

app.get("/user/:id", (req, res) => {
  let userID = req.params.id;
  res.send(`Hello ${userID}`);
});

app.get("/todos", (req, res) => {
  const filestream = fs.createReadStream("./todos.json", "utf-8");
  filestream.pipe(res);
});

app.post("/senddata", (req, res) => {
  res.send("Data has send");
});

app.listen(8000);
