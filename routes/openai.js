const express = require("express");
const router = express.Router();

router.post("/generate", (req, res) => {
  res.status(200).json({ message: "ok" });
});

module.exports = router;