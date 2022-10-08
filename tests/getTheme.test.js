import { getTheme } from "../src/functions.js";

const themes = {
  default: {
    "primary_color": "#0969da",
    "text_color": "#24292f",
    "bg_color": "#fffefe"
  },
  dark: {
    "primary_color": "#58a6ff",
    "text_color": "#c9d1d9",
    "bg_color": "#0d1117"
  }
}

describe("getTheme", () => {
  test("default - should return default theme", () => {
    expect(getTheme("default")).toStrictEqual(themes.default);
  });

  test("dark - should return dark theme", () => {
    expect(getTheme("dark")).toStrictEqual(themes.dark);
  });

  test("random string - should return default theme", () => {
    expect(getTheme("foo")).toStrictEqual(themes.default);
  });

  test("undefined - should return default theme", () => {
    expect(getTheme()).toStrictEqual(themes.default);
  });

  test("empty string - should return default theme", () => {
    expect(getTheme("")).toStrictEqual(themes.default);
  });
});
