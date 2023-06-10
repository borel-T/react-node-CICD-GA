const express = require("express");
const app = express();

app.get("/names", (req, res) => {
  console.log("names requested");
  res.send("Borel");
});

app.listen(5000, (error, res) => {
  if (error) {
    console.log("Server not listening");
  }
  console.log("Server listening");
});
