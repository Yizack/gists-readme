import { getCard } from "./../src/card.js";

const fakeGist = {
  data: [
    {
      files: {
        "reduce_dataset.js": {
          filename: "reduce_dataset.js",
          language: "JavaScript",
        },
      },
    },
    {
      files: {
        "submissions.gs": {
          filename: "submissions.gs",
          language: "JavaScript",
        },
      },
    },
    {
      files: {
        "provincias.json": {
          filename: "provincias.json",
          language: "JSON",
        },
      },
    }
  ]
};

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
    test(`${JSON.stringify(query)} - should return card`, async () => {
      const card = getCard(query, fakeGist);
      expect(card).toBeDefined();
    });
  });

  empty_card.forEach((query) => {
    test(`${JSON.stringify(query)} - should return empty card`, async () => {
      const card = getCard(query, { data: [] });
      expect(card.gists).toStrictEqual([]);
    });
  });
});
