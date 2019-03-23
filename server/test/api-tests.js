const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect; //eslint-disable-line
const should = chai.should();
chai.use(chaiHttp);
const server = process.env.SERVER || 'http://localhost:8000';

describe('/GET VoterId', () => { //eslint-disable-line
  it('it should GET VoterId requirements by state', () => { //eslint-disable-line
    chai
      .request(`${server}`)
      .get('/api/voterId/:state')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done(); //eslint-disable-line
      })
      .catch(err => err);
  });
});


describe('GET candidates', () => { //eslint-disable-line
  it('should get all candidate data', () => { //eslint-disable-line

    chai
      .request(`${server}`)
      .get('/api/candidates')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200); //eslint-disable-line
        expect(res).to.be.json; //eslint-disable-line
        done(); //eslint-disable-line
      })
      .catch(err => err);
  });
});

describe('GET policies', () => { //eslint-disable-line
  it('should get all policy data', () => { //eslint-disable-line
    chai
      .request(`${server}`)
      .get('/api/policies')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200); //eslint-disable-line
        expect(res).to.be.json; //eslint-disable-line
        done(); //eslint-disable-line
      })
      .catch(err => err);
  });
});

describe('GET voter', () => { //eslint-disable-line
  it('should get all voter data', () => { //eslint-disable-line
    chai
      .request(`${server}`)
      .get('/api/voter')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);//eslint-disable-line
        expect(res).to.be.json;//eslint-disable-line
        done();//eslint-disable-line
      })
      .catch(err => err);
  });
});

describe('GET candidateInfoPage', () => { //eslint-disable-line
  it('should get name, photo, and party for all candidates', () => { //eslint-disable-line
    chai
      .request(`${server}`)
      .get('/api/candidateInfoPage')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200); //eslint-disable-line
        expect(res).to.be.json; //eslint-disable-line
        done(); //eslint-disable-line
      }).catch(err => err);
  });
});

describe('GET bios', () => { //eslint-disable-line
  it('should get bios for all candidates', () => { //eslint-disable-line

    chai
      .request(`${server}`)
      .get('/api/bios')
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200); //eslint-disable-line
        expect(res).to.be.json; //eslint-disable-line
        done(); //eslint-disable-line
      }).catch(err => err);
  });
});
