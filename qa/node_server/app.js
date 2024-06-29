const express = require("express");
const app = express();
const PORT = 3050;

app.get("/", (req, res) => {
  res.send("NodeJS Backend Server");
});

app.use("*", (req, res) => {
  res.send("Page doesn't exist");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
