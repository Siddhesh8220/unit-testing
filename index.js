const express = require("express");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use(authMiddleware);

app.get("/home", (req, res) => {
  res.status(200).json({ status: 200, message: "Successful authentication" });
});

app.get("/healthcheck", (req, res) => {
  res.status(200).json({ status: 200, message: "Successful authentication" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

module.exports = app;
