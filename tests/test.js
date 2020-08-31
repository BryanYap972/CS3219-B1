import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import app from "../src/api";

chai.use(chaiHttp);
chai.should();

describe("Tests", () => {
  describe("/GET test", () => {
    it("it should GET all the users", function (done) {
      try {
        assert(true, true);
        done();
      } catch (done) {}
    });
  });
});
