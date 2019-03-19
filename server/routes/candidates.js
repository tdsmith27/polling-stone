const router = require("express").Router();
const db = require('../../db/index.js')

router.get("/", (req, res) => {
  db.findAllCandidates(null, (err, results) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      console.log("success candidates retrieval")
      res.status(200).json(results)
    }
  })
})
// Routes for Database

// Routes for APIs start here

module.exports = router;
