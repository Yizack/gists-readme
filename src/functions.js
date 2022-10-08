import { createRequire } from "module";

const require = createRequire(import.meta.url);
const languages = require("../resources/language_colors.json");
const themes = require("../resources/themes.json");

export const getLanguageColor = (name) => { // export language color
  return languages.hasOwnProperty(name) ? languages[name].color : "#ededed";
};

export const getTheme = (name) => { // export theme
  return themes.hasOwnProperty(name) ? themes[name] : themes["default"];
};
