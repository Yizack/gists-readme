import { describe, it } from "vitest";
import app from "./../api/pin.js";
import request from "supertest";

describe("renderCard", () => {
  it("should render card", async () => {
    await request(app).get("/api/pin").expect("Content-Type", /svg/);
  });
});
