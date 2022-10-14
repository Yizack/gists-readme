import { jest } from "@jest/globals";
import { getGist } from "./../src/gist.js";
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

axios.get = jest.fn();

describe("getGist", () => {
  test("gist id - should return gist", async () => {
    axios.get.mockResolvedValue(fakeGist);
    const gist = await getGist("cbe7cef5572e6b832da0e9bd3454b312");
    expect(gist.data.files["reduce_dataset.js"].language).toEqual("JavaScript");
  });

  test("undefined - should go on error and return empty data object", async () => {
    axios.get.mockResolvedValue(Promise.reject(new Error()));
    await getGist().catch((e) => {
      expect(e).rejects.toThrow();
    });

    axios.get.mockResolvedValue({ data: {} });
    const gists = await getGist();
    expect(gists.data).toEqual({});
  });

  test("gist doesn't exist - should return empty object", async () => {
    axios.get.mockResolvedValue({ data: {} });
    const gists = await getGist("_");
    expect(gists.data).toEqual({});
  });
});
