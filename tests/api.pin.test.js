import { jest } from "@jest/globals";
import app from "./../api/pin.js";
import request from "supertest";
import axios from "axios";
jest.useFakeTimers("legacy");

jest.mock("axios");

const fakeResponse = {
  user: "yizack",
  id: "cbe7cef5572e6b832da0e9bd3454b312",
  data: [
    {
      description: "description",
      files: {
        "reduce_dataset.js": {
          filename: "reduce_dataset.js",
          language: "JavaScript",
        },
      },
    }
  ],
};

const fakeHTML = {
  data: `
    <nav aria-label="Gist">
      <div data-hotkey="g s">
        <span class="Counter" title="1"></span>
      </div>
      <div data-hotkey="g f">
        <span class="Counter" title="1">
      </span></div>
    </nav>`
};

const fakeHTML0 = {
  data: `
    <nav aria-label="Gist">
    </nav>`
};

axios.get = jest.fn();

describe("renderCard", () => {
  test("should render card", async () => {
    axios.get.mockResolvedValueOnce(fakeResponse);
    axios.get.mockResolvedValueOnce(fakeHTML);
    await request(app).get("/api/pin").expect("Content-Type", /svg/);
  });

  test("should render card with 0 stars and forks", async () => {
    axios.get.mockResolvedValueOnce(fakeResponse);
    axios.get.mockResolvedValueOnce(fakeHTML0);
    await request(app).get("/api/pin").expect("Content-Type", /svg/);
  });
});
