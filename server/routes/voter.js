const router = require("express").Router();
const db = require("../../db/index.js");

router.get("/", (req, res) => {
  db.findAllStates(null, (err, results) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //getting an array of objects, turn into an of names
      let states = [];
      results.forEach((ele) => {
        states.push(ele.state)
      })
      res.status(200).json(states);
    }
  });
});

module.exports = router;
