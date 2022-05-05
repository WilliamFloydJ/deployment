const express = require("express");
const cors = require("cors");
const path = require("path");

const app = require(express());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const Port = process.env.Port || 4200;

app.listen(Port, () => {
  console.log(`Welcome to port ${Port} Mr.Smith`);
});
