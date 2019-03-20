const router = require("express").Router();
const db = require('../../db/index.js')


router.get("/", (req, res) => {
  db.findCandidatePage(null, (err, results) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      console.log("success candidates page info retrieval")
      res.status(200).json(results)
    }
  })
})

module.exports = router;