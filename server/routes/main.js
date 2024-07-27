#!/usr/bin/node

const express = require("express");

//Registering a blueprint
const router = express.Router();

router.get("", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
