const path = require("path");
const express = require("express");
const app = express();

console.log("Its a doing somethin");

app.get("/", (req, res) => {
  const htmlFilePath = path.resolve(__dirname, "public/index.html");

  res.sendFile(htmlFilePath);
});

const PORT = 4025;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
