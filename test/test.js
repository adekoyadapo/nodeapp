const request = require("supertest");
const app = require("../index");

describe("GET /hello", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/hello").expect("Hello World", done);
  })
});