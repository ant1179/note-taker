const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ message: "pong" });
});

module.exports = router;