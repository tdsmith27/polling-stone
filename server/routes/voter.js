const router = require("express").Router();
const db = require("../db/index.js");

router.get("/", (req, res) => {
  db.findAllStates(null, (err, results) => {
    if (err) {
      next(err);
    } else {
      const states = results.map((ele) => {
        return ele.state
      })
      res.status(200).json(states);
    }
  });
});

module.exports = router;
