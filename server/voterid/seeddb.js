const path = require('path');
const pg = require('pg');
require('dotenv').config(path.join(__dirname, "../.env"));
const knex = require('knex')


const options = {
  production: {
    client: 'pg',
    version: '10.6',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    },
    pool: { min: 1, max: 7 }
  }
}

const insertStates = (row) => {
  //console.log(row)
   knex('voter-id').insert(row)
  .then(() => console.log('Successfully inserted row'))
  .catch((err) => console.log('there was an error inserting row', err))
}

module.exports = {
  insertStates
}