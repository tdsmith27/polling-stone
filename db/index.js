const config = require('../knexfile')['production'];
const knex = require('knex')(config)
const sql = knex('test table').then((result) => {
  console.log('successful open connection to hosted database')
}).catch((err) => {
  console.log('err:', err)
})

module.exports = sql
