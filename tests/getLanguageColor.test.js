import { getLanguageColor } from "./../src/functions.js";

describe("getLanguageColor", () => {
  test("JavaScript - should return language color", () => {
    expect(getLanguageColor("JavaScript")).toBe("f1e05a");
  });

  test("Python - should return language color", () => {
    expect(getLanguageColor("Python")).toBe("3572A5");
  });

  test("random string - should return default color", () => {
    expect(getLanguageColor("foo")).toBe("ededed");
  });

  test("undefined - should return default color", () => {
    expect(getLanguageColor()).toBe("ededed");
  });

  test("empty string - should return default color", () => {
    expect(getLanguageColor("")).toBe("ededed");
  });
});
