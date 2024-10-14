const { generate } = require("youtube-po-token-generator");
const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", async (req, res) => {
  const { visitorData, poToken } = await generate();

  res.json({ visitorData, poToken });
});

app.get("/status", (req, res) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
