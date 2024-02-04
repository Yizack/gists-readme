import { describe, it } from "vitest";
import app from "./../api/index.js";
import request from "supertest";

describe("renderCard", () => {
  it("should render card", async () => {
    await request(app).get("/api").expect("Content-Type", /svg/);
  });
});
