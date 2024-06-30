const express = require("express");
const axios = require("axios");
var cors = require("cors");
const knnRoute = require("./routes/knn-route");
const gsLogisticRoute = require("./routes/gs-logistic-route");
const rsLogisticRoute = require("./routes/rs-logistic-route");
const rsRandomForestRoute = require("./routes/rs-randomforest");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3050;

app.use(bodyParser.json());
app.use(cors());
app.use(knnRoute);
app.use(gsLogisticRoute);
app.use(rsLogisticRoute);
app.use(rsRandomForestRoute);

app.use("*", (req, res) => {
  res.send("Page doesn't exist");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
