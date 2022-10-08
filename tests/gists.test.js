import { getGists } from "../src/gists.js";

describe("getGists", () => {
  
  test("yizack - should return gists", async () => {
    const gists = await getGists("yizack");
    expect(gists).toBeDefined();
  });

  test("undefined - should return empty array", async () => {
    const gists = await getGists();
    expect(gists.data).toEqual([]);
  });

  test("user doesn't exist - should return empty array", async () => {
    const gists = await getGists("_");
    expect(gists.data).toEqual([]);
  });

});
