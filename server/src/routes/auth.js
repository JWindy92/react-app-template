const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/User");
require("dotenv").config();

// Login user
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check if username exists
  const user = await User.findOne({ 'username': username });
  if (!user) return res.status(400).send({"error":"Invalid username or password"});

  // Check if password is correct
  const salt = await bcrypt.genSalt(10)
  const crypt = await bcrypt.hash("12345", salt)
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res.status(400).send({"error": "Invalid username or password"});

  // Create and sign JWT token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({"token": token});
});

module.exports = router;
