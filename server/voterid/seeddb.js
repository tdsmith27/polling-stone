const path = require('path');
const pg = require('pg');
require('dotenv').config(path.join(__dirname, "./.env"));


const knex = require('knex')({
  client: 'pg',
  version: '10.6',
  connection: {
    host: 'votingapp.cbgsyeibed0o.us-east-2.rds.amazonaws.com',
    user: 'hr39',
    password: 'Password1',
    database: 'votingapp'
  }
});

const insertStates = (row) => {
  //console.log(row)
   knex('voter-id').insert(row)
  .then(() => console.log('Successfully inserted row'))
  .catch((err) => console.log('there was an error inserting row', err))
}

module.exports = {
  insertStates
}