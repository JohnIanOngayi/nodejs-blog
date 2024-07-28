#!/usr/bin/node

const express = require("express");

//Registering a blueprint
const router = express.Router();

router.get("", (req, res) => {
  const locals = {
    title: "Nodejs Blog",
    description: "Simple Blog Website Written in Node, Express & MongoDB",
  };
  res.render("index" , { locals });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
