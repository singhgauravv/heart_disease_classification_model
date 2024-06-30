const express = require("express");
const axios = require("axios");
const router = express.Router();

// rs-logistic
router.post("/api/logistic/rs", async (req, res) => {
  const { attributes } = req.body;
  const featuresArray = Object.values(attributes);

  try {
    response = await axios.post(
      "http://localhost:5000/python/logistic/rs",
      featuresArray
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).send("Some Error Occured");
  }
});

module.exports = router;
