import { jest } from "@jest/globals";
import { getGists } from "../src/gistsList.js";
import axios from "axios";

jest.mock("axios");

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

const fakeEmptyGist = {
  data: []
};

axios.get = jest.fn();

describe("getGists", () => {

  test("yizack - should return gists", async () => {
    axios.get.mockResolvedValue(fakeGist);
    const gists = await getGists("yizack");
    expect(gists.data[0].files["reduce_dataset.js"].language).toEqual("JavaScript");
    expect(gists.data[1].files["submissions.gs"].language).toEqual("JavaScript");
    expect(gists.data[2].files["provincias.json"].language).toEqual("JSON");
  });

  test("undefined - should go on error and return empty data array", async () => {
    axios.get.mockResolvedValue(Promise.reject(new Error()));
    await getGists().catch((e) => {
      expect(e).rejects.toThrow();
    });

    axios.get.mockResolvedValue(fakeEmptyGist);
    const gists = await getGists();
    expect(gists.data).toEqual([]);
  });

  test("user doesn't exist - should return empty array", async () => {
    axios.get.mockResolvedValue(fakeEmptyGist);
    const gists = await getGists("_");
    expect(gists.data).toEqual([]);
  });

});
