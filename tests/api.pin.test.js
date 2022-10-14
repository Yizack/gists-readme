import app from "./../api/pin.js";
import request from "supertest";

describe("renderCard", () => {
  test("should render card", async () => {
    await request(app).get("/api/pin").expect("Content-Type", /svg/);
  });
});
