const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

// A test to test the tests
// describe("Array", () => {
//   describe("#indexOf()", () => {
//     it("should return -1 when the value is not present", () => {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

// Tests for API calls start below
describe("GET /test", () => {
  it("should get json test data", done => {
    chai
      .request("http://localhost:8000")
      .get("/api/candidates/test")
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });
});

describe("GET candidates", () => {
  it("should get all candidate data", () => {
    chai
      .request("http://localhost:8000")
      .get("/api/candidates")
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      })
      .catch(err => err);
  });
});

describe("GET policies", () => {
  it("should get all policy data", () => {
    chai
      .request("http://localhost:8000")
      .get("/api/policies")
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      })
      .catch(err => err);
  });
});

describe("GET voter", () => {
  it("should get all voter data", () => {
    chai
      .request("http://localhost:8000")
      .get("/api/voter")
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      })
      .catch(err => err);
  });
});

describe("GET candidateInfoPage", () => {
  it("should get name, photo, and party for all candidates", () => {
    chai
      .request("http://localhost:8000")
      .get("/api/candidateInfoPage")
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => err)
  });
});

describe("GET bios", () => {
  it("should get bios for all candidates", () => {
    chai
      .request("http://localhost:8000")
      .get("/api/bios")
      .then((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      }).catch(err => err)
  });
});


