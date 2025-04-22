require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080; // Default port for local development

app.use(cors()); // allows frontend to access the backend

const API_KEY = process.env.HM_API_KEY;

app.get("/api/images", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.harvardartmuseums.org/image?apikey=${API_KEY}&size=2&sort=random`
    );

    const urls = response.data.records.map((record) => record.baseimageurl);
    res.json({ images: urls });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images from Harvard API." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
