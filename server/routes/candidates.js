const router = require("express").Router();

// Test GET
router.get("/", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

// Routes for Database

// Routes for APIs start here

module.exports = router;
