const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();
const { connection } = require("./db");
const { Usermodel } = require("./user.model");

app.use(express.json());

const authonticate = (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];
  if (!token) {
    return res.send("Please Login");
  }
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    const { userId } = decoded;
    req.userId = userId;
    if (decoded) {
      next();
    } else {
      res.send("Please Login");
    }
  });
};

const authorise=(permittedRole)=> {
  return async(req,res,next)=>{
  const userId=req.userId;
  const user=await Usermodel.findOne({_id: userId});
  if(permittedRole.includes(user.role)){
    next();
  }else{
    res.send("You are not authorised")
  }
}
}

app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, age, role } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    const new_user = new Usermodel({ email, password: hash, name, age, role });
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
      var token = jwt.sign({ userId: new_user._id }, process.env.JWT_SECRET);
      res.send({ msg: "login successfull", token: token });
    } else {
      res.send("Login failed");
    }
  } catch (error) {
    console.log("error in signup");
    console.error(error);
  }
});

app.get("/products", authonticate, (req, res) => {
  res.send("here is products");
});

app.get("/products/create", authonticate,authorise(["seller"]), (req, res) => {
    res.send("product created");
});

app.get("/upcomming", authonticate,authorise(["seller"]), async (req, res) => {
  res.send("sale started");
})

app.get("/yourbirthday", authonticate,authorise(["customer"]), async (req, res) => {
  res.send("It is your birthday");
})

app.listen(8080, async () => {
  try {
    await connection;
    console.log("connection successful");
  } catch (error) {
    console.log(error);
    console.log("error in connection");
  }
});
