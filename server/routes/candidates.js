const router = require("express").Router();
const db = require("../db/index.js");


router.get("/:id", (req, res) => {
  const candId = req.params.id;
  db.findAllCandidates(candId, (err, results) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
