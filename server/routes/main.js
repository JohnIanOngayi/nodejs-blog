#!/usr/bin/node

const express = require("express");

//Registering a blueprint
const router = express.Router();

router.get("", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
