const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  const token = req.headers?.authorization.split(" ")[1];
  if (!token) {
    res.send("Please login");
  }
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    const { userId } = decoded;
    req.userId = userId;
    if (decoded) {
      next();
    } else {
      res.send("Please login");
    }
  });
};

module.exports = { authentication };
