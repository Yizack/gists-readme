import { describe, expect, it } from "vitest";
import { getLanguageColor } from "./../src/functions.js";

describe("getLanguageColor", () => {
  it("JavaScript - should return language color", () => {
    expect(getLanguageColor("JavaScript")).toBe("f1e05a");
  });

  it("Python - should return language color", () => {
    expect(getLanguageColor("Python")).toBe("3572A5");
  });

  it("random string - should return default color", () => {
    expect(getLanguageColor("foo")).toBe("ededed");
  });

  it("undefined - should return default color", () => {
    expect(getLanguageColor()).toBe("ededed");
  });

  it("empty string - should return default color", () => {
    expect(getLanguageColor("")).toBe("ededed");
  });
});
