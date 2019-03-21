const router = require("express").Router();
const db = require("../../db/index.js");

// Test GET
router.get("/test", (req, res) => {
  res.json({ data: ["dolphins", "manatees", "sea turles"] });
});

router.get("/:id", (req, res) => {
  const candId = req.params.id;
  db.findAllCandidates(candId, (err, results) => {
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
