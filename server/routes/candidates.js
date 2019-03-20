const router = require("express").Router();
const db = require("../../db/index.js");

// Test GET
router.get("/test", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

router.get("/", (req, res) => {
  db.findAllCandidates(null, (err, results) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log("success candidates retrieval");
      res.status(200).json(results);
    }
  });
});

module.exports = router;
