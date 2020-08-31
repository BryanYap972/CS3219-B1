import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/api";

chai.use(chaiHttp);
chai.should();

describe("Tests", () => {
  describe("/GET test", () => {
    it("it should GET all the users", (done) => {
      chai
        .request(app)
        .get("/.netlify/functions/api/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(3);
          done();
        });
    });
  });
});
