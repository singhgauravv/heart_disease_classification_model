const express = require("express");
const axios = require("axios");
const router = express.Router();

// KNN
router.post("/api/knn", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post(
      "http://localhost:5000/python/knn",
      featuresArray
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error during KNN request:", err);
    res.status(500).send("Some Error Occured");
  }
});

module.exports = router;
