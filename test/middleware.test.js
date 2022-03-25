var chaiHttp = require("chai-http");
var chai = require("chai");
const app = require("../index");
const { expect } = require("chai");
chai.use(chaiHttp);

// run with npm run coverage
// afterward press ctrl+c to check code coverage

describe("basic-authentication", () => {
  // Request with valid credentials
  it("valid auth credentials", () => {
    chai
      .request(app)
      .get("/home")
      .auth("Siddhesh", "123456")
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
  });

  //Request with invalid credentials
  it("invalid auth credentials", () => {
    chai
      .request(app)
      .get("/home")
      .auth("Siddhesh", "565454")
      .end((err, res) => {
        expect(res).to.have.status(401);
      });
  });

  // Request with /healthcheck api which will execute next()
  it("request with /healthcheck api", (done) => {
    chai
      .request(app)
      .get("/healthcheck")
      .auth("Siddhesh", "123456")
      .end((err, res) => {
        done();
      });
  });

  // Request with no authentication header
  it("request with no auth header", () => {
    chai
      .request(app)
      .get("/home")
      .end((err, res) => {
        expect(res).to.have.status(401);
      });
  });
});
