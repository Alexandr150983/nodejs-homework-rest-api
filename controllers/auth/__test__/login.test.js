const request = require("supertest");

const app = require("../../../server");

describe("test POST /users/login", () => {
  it("Should successfully log in and return user object with JWT token", async () => {
    const testData = {
      email: "olexandr2@gmail.com",
      password: "1234567",
    };
    const res = await request(app).post("/users/login").send(testData);

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toEqual(expect.any(String));
    expect(res.body.user.email).toEqual(expect.any(String));
    expect(res.body.user.subscription).toEqual(expect.any(String));
  });
});
