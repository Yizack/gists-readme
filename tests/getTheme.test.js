import { describe, it, expect } from "vitest";
import { getTheme } from "./../src/functions.js";

const themes = {
  default: {
    "primary_color": "0969da",
    "text_color": "434d58",
    "bg_color": "fffefe",
    "icon_color": "586069",
    "border_color": "e4e2e2"
  },
  dark: {
    "primary_color": "58a6ff",
    "text_color": "c9d1d9",
    "bg_color": "0d1117",
    "icon_color": "58a6ff",
    "border_color": "30363d"
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
