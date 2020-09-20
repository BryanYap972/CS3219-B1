import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import { serverlessApp } from "../src/api";

chai.use(chaiHttp);
chai.should();
const app = serverlessApp;

describe("Tests", () => {
  describe("/GET test", () => {
    it("it should GET all the users", function (done) {
      try {
        chai
          .request(app)
          .get("/.netlify/functions/api/users")
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      } catch (done) {}
    });
  });
});
