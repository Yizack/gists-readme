import { describe, it, expect, vi } from "vitest";
import { getGists } from "../src/gistsList.js";
import { $fetch } from "ofetch";

const fakeGists = [
  {
    files: {
      "reduce_dataset.js": {
        filename: "reduce_dataset.js",
        language: "JavaScript"
      }
    }
  },
  {
    files: {
      "submissions.gs": {
        filename: "submissions.gs",
        language: "JavaScript"
      }
    }
  },
  {
    files: {
      "provincias.json": {
        filename: "provincias.json",
        language: "JSON"
      }
    }
  }
];

vi.mock("ofetch", () => ({
  $fetch: vi.fn()
}));

describe("getGists", () => {
  it("yizack - should return gists", async () => {
    vi.mocked($fetch).mockResolvedValueOnce(fakeGists);
    const gists = await getGists("yizack");
    expect(gists).toEqual(fakeGists);
    expect(gists[0].files["reduce_dataset.js"].language).toEqual("JavaScript");
    expect(gists[1].files["submissions.gs"].language).toEqual("JavaScript");
    expect(gists[2].files["provincias.json"].language).toEqual("JSON");
  });

  it("undefined - should return empty data array", async () => {
    vi.mocked($fetch).mockResolvedValueOnce([]);
    const gists = await getGists();
    expect(gists).toEqual([]);
  });

  it("user doesn't exist - should return empty array", async () => {
    vi.mocked($fetch).mockResolvedValueOnce([]);
    const gists = await getGists("_");
    expect(gists).toEqual([]);
  });
});
