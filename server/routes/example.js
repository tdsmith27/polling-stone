const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({data:['dolphins', 'manatees', 'sea turles']})
})

console.log('hi')

module.exports = router;