const config = require("../knexfile")["production"];
const knex = require("knex")(config);

const initialConnection = knex("test table")
  .then(result => {
    console.log("successful connection to hosted database, lets go team!");
  })
  .catch(err => {
    console.log("err:", err);
  });

const getStateIdLaws = (state, cb) => {
  knex.select()
    .table('voter-id')
    .where('state', `${state}`)
    .then((data) => cb(null, data))
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
}

const findAllCandidates = (id, cb) => {
  knex("candidates")
    .where('id', id)
    .then(results => {
      cb(null, results);
    })
    .catch(err => {
      cb(err);
      console.log("err:", err);
    });
};

const findAllPolicies = (id, cb) => {
  knex("policies")
    .where('id', id)
    .then(results => {
      cb(null, results);
    })
    .catch(err => {
      cb(err);
      console.log("err:", err);
    });
};

const findAllStates = (err, cb) => {
  knex.select('state')
    .table('voter-id')
    .then((data) => cb(null, data))
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
};

const findCandidatePage = (err, cb) => {
  knex.column('firstName', 'lastName', 'photoUrl', 'party').select().from('candidates')
    .then((results) => {
      cb(null, results)
    })
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
}

const findAllBios = (id, cb) => {
  knex('bios')
    .where('id', id)
    .then((results) => {
      cb(null, results)
    })
    .catch((err) => {
      cb(err)
      console.log('err:', err)
    })
}

module.exports = {
  initialConnection,
  findAllCandidates,
  findAllPolicies,
  findAllStates,
  getStateIdLaws,
  findCandidatePage,
  findAllBios
};

