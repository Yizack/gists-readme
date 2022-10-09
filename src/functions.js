/** @module functions */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const languages = require("../resources/language_colors.json");
const themes = require("../resources/themes.json");

/** 
 * Returns the language hex color code from the language_colors.json file
 * @function
 * @param {string} name Name of the language 
 * @returns {string} Hex color code
 */
export const getLanguageColor = (name) => { // export language color
  return languages.hasOwnProperty(name) ? languages[name].color : "#ededed";
};

/**
 * Returns the theme object from the themes.json file
 * @function
 * @param {string} name Name of the theme
 * @returns {Object} Theme object
 */
export const getTheme = (name) => { // export theme
  return themes.hasOwnProperty(name) ? themes[name] : themes["default"];
};
