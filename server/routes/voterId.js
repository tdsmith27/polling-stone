const router = require('express').Router();
const db = require('../../db/index.js')

router.get('/:state', (req, res) => {
  let state = req.params.state;
  db.getStateIdLaws(state, (err, results) => {
    if (err) {
      console.log('error on voterId API: ', err)
      res.end()
    } else {
      res.send(results)
    }
  })
})

module.exports = router;
