import { describe, it, expect } from "vitest";
import { getCard } from "./../src/card.js";

const fakeGists = [
  {
    public: true,
    files: {
      "reduce_dataset.js": {
        filename: "reduce_dataset.js",
        language: "JavaScript",
      },
    },
  },
  {
    public: true,
    files: {
      "submissions.gs": {
        filename: "submissions.gs",
        language: "JavaScript",
      },
    },
  },
  {
    public: true,
    files: {
      "provincias.json": {
        filename: "provincias.json",
        language: "JSON",
      },
    },
  }
];

const defined_card = [
  { n: 3 },
  { title: "" },
  { title: "Yizack Gists" },
  { theme: "dark" },
];

const empty_card = [
  { n: 0 },
  { theme: "dark" },
  { user: "_" },
  { user: "" }
];

describe("getCard", () => {
  defined_card.forEach((query) => {
    it(`${JSON.stringify(query)} - should return card`, async () => {
      const card = getCard(query, fakeGists);
      expect(card).toBeDefined();
    });
  });

  empty_card.forEach((query) => {
    it(`${JSON.stringify(query)} - should return empty card`, async () => {
      const card = getCard(query, []);
      expect(card.gists).toStrictEqual([]);
    });
  });
});
