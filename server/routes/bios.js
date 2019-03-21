const router = require("express").Router();
const db = require('../../db/index.js')

router.get("/:id", (req, res) => {
  const candId = req.params.id;
  db.findAllBios(candId, (err, results) => {
    if (err) {
      console.log(err)
      res.end()
    } else {
      console.log("success bios retrieval")
      res.status(200).json(results)
    }
  })
})

module.exports = router;