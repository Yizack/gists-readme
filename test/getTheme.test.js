import { describe, expect, it } from "vitest";
import { getTheme } from "./../src/functions.js";

const themes = {
  default: {
    primaryColor: "0969da",
    textColor: "434d58",
    bgColor: "fffefe",
    iconColor: "586069",
    borderColor: "e4e2e2"
  },
  dark: {
    primaryColor: "58a6ff",
    textColor: "c9d1d9",
    bgColor: "0d1117",
    iconColor: "58a6ff",
    borderColor: "30363d"
  }
};

describe("getTheme", () => {
  it("default - should return default theme", () => {
    expect(getTheme("default")).toStrictEqual(themes.default);
  });

  it("dark - should return dark theme", () => {
    expect(getTheme("dark")).toStrictEqual(themes.dark);
  });

  it("random string - should return default theme", () => {
    expect(getTheme("foo")).toStrictEqual(themes.default);
  });

  it("undefined - should return default theme", () => {
    expect(getTheme()).toStrictEqual(themes.default);
  });

  it("empty string - should return default theme", () => {
    expect(getTheme("")).toStrictEqual(themes.default);
  });
});
