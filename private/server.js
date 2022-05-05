const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

const Port = process.env.PORT || 4200;

app.listen(Port, () => {
  console.log(`Welcome to port ${Port} Mr.Smith`);
});
