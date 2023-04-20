const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateToken(user) {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return token;
}

function verifyToken(token) {
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { generateToken, verifyToken };
