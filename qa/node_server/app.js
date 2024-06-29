const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3050;

app.use(bodyParser.json());

// KNN
app.post("/api/knn", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post("http://localhost:5000/knn", featuresArray);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});

// gs-logistic
app.post("/api/logictic/gs", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post(
      "http://localhost:5000/logistic/gs",
      featuresArray
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});

// rs-logistic
app.post("/api/logistic/rs", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post(
      "http://localhost:5000/logistic/rs",
      featuresArray
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});

// rs-randomforest
app.post("/api/randomforest/rs", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post(
      "http://localhost:5000/randomforest/rs",
      featuresArray
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});
app.use("*", (req, res) => {
  res.send("Page doesn't exist");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
