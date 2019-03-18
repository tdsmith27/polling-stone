const knex = require('knex')


const options = {
  production: {
    client: 'pg',
    version: '10.6',
    connection: {
      host: 'votingapp.cbgsyeibed0o.us-east-2.rds.amazonaws.com',
      user: 'hr39',
      password: 'Password1',
      database: 'votingapp'
    },
  }
}

module.exports = options

