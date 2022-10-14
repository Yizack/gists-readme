import { jest } from "@jest/globals";
import { getPin } from "./../src/pin.js";
import axios from "axios";

jest.mock("axios");

const fakeGist = {
  id: "cbe7cef5572e6b832da0e9bd3454b312",
  data: {
    description: "description",
    files: {
      "reduce_dataset.js": {
        filename: "reduce_dataset.js",
        language: "JavaScript"
      }
    }
  }
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

const fakeNoForksStarsHTML = {
  data: `
    <nav aria-label="Gist">
    </nav>`
};

const defined_pin = [
  { id: "cbe7cef5572e6b832da0e9bd3454b312" },
  { id: "cbe7cef5572e6b832da0e9bd3454b312", user: "Yizack" }
];

const empty_pin = [
  { id: "_" },
  { id: "_", user: "Yizack" },
  { user: "Yizack" }
];

axios.get = jest.fn();

describe("getPin", () => {
  defined_pin.forEach((query) => {
    test(`${JSON.stringify(query)} - should return pin`, async () => {
      axios.get.mockResolvedValue(fakeHTML);
      const pin = await getPin(query, fakeGist);
      expect(pin).toBeDefined();
    });
  });

  empty_pin.forEach((query) => {
    test(`${JSON.stringify(query)} - should return empty pin`, async () => {
      axios.get.mockResolvedValue(fakeNoForksStarsHTML);
      const pin = await getPin(query, { data: [] });
      expect(pin.filename).toBeUndefined();
    });
  });
});
