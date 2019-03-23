const path = require('path');

require('dotenv').config(path.join(__dirname, './.env'));

const env = process.env.NODE_ENV;
const config = require('../knexfile') //eslint-disable-line
const knex = require('knex')(config[env]); //eslint-disable-line

const initialConnection = knex('test table')
  .then(() => {
  })
  .catch(() => {
  });

const getStateIdLaws = (state, cb) => {
  knex.select()
    .table('voter-id')
    .where('state', `${state}`)
    .then(data => cb(null, data))
    .catch((err) => {
      cb(err);
    });
};

const findAllCandidates = (id, cb) => {
  knex('candidates')
    .where('id', id)
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err);
    });
};

const findAllPolicies = (id, cb) => {
  knex('policies')
    .where('id', id)
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err);
    });
};

const findAllStates = (err, cb) => {
  knex.select('state')
    .table('voter-id')
    .then(data => cb(null, data))
    .catch(() => {
      cb(err);
    });
};

const findCandidatePage = (err, cb) => {
  knex.column('firstName', 'lastName', 'photoUrl', 'party').select().from('candidates')
    .then((results) => {
      cb(null, results);
    })
    .catch(() => {
      cb(err);
    });
};

const findAllBios = (id, cb) => {
  knex('bios')
    .where('id', id)
    .then((results) => {
      cb(null, results);
    })
    .catch((err) => {
      cb(err);
    });
};

module.exports = {
  initialConnection,
  findAllCandidates,
  findAllPolicies,
  findAllStates,
  getStateIdLaws,
  findCandidatePage,
  findAllBios,
};
