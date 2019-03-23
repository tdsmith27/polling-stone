const router = require('express').Router();
const db = require('../db/index.js');


router.get('/', (req, res, next) => {
  db.findCandidatePage(null, (err, results) => {
    if (err) {
      next(err);
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
