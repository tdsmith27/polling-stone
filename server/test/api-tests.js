const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

// A test to test the tests
describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Tests for API calls start below
describe("GET /", () => {
  it("should get json test data", done => {
    chai
      .request("http://localhost:8000")
      .get("/api/candidates")
      .end((err, res) => {
        should.not.exist(err);
        should.exist(res);
        res.should.have.status(200);
        expect(res).to.be.json;
        done();
      });
  });
});
