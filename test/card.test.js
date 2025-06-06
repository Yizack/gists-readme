import { describe, expect, it } from "vitest";
import { getCard } from "./../src/card.js";

const fakeGists = [
  {
    public: true,
    files: {
      "reduce_dataset.js": {
        filename: "reduce_dataset.js",
        language: "JavaScript"
      }
    }
  },
  {
    public: true,
    files: {
      "submissions.gs": {
        filename: "submissions.gs",
        language: "JavaScript"
      }
    }
  },
  {
    public: true,
    files: {
      "provincias.json": {
        filename: "provincias.json",
        language: "JSON"
      }
    }
  }
];

const definedCard = [
  { n: 3 },
  { title: "" },
  { title: "Yizack Gists" },
  { theme: "dark" }
];

const emptyCard = [
  { n: 0 },
  { theme: "dark" },
  { user: "_" },
  { user: "" }
];

describe("getCard", () => {
  for (const query of definedCard) {
    it(`${JSON.stringify(query)} - should return card`, async () => {
      const card = getCard(query, fakeGists);
      expect(card).toBeDefined();
    });
  }

  for (const query of emptyCard) {
    it(`${JSON.stringify(query)} - should return empty card`, async () => {
      const card = getCard(query, []);
      expect(card.gists).toStrictEqual([]);
    });
  }
});
