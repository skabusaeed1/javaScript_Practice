const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const clientID = "8184a1a88c696ebe5396";
const clientSecret = "70e03b2fafe2752dadf9cf2698c612ccff952f36";
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Home page");
});

app.get("/login", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/auth/github", async (req, res) => {
  const { code } = req.query;
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      clientID,
      clientSecret,
      code,
    }),
  }).then((res) => res.json());
  const access_token = response.access_token;

  const user_info = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());
  console.log(user_info);
  res.send("Post authentication page");
});

app.listen(8000, async () => {
 console.log("connection successful");
});
