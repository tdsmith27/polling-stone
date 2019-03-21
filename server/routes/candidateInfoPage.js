const router = require("express").Router();
const db = require('../../db/index.js')


router.get("/", (req, res) => {
  db.findCandidatePage(null, (err, results) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      res.status(200).json(results)
    }
  })
})

module.exports = router;