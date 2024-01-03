/**
 * @module functions
 * @requires module
 */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const languages = require("./../resources/language_colors.json");
const themes = require("./../resources/themes.json");

/**
 * Returns the language hex color code from the language_colors.json file
 * @function
 * @param {string} name Name of the language
 * @returns {string} Hex color code
 */
export const getLanguageColor = (name) => { // export language color
  return Object.prototype.hasOwnProperty.call(languages, name) ? languages[name].color : "ededed";
};

/**
 * Returns the theme object from the themes.json file
 * @function
 * @param {string} name Name of the theme
 * @returns {Object} Theme object
 */
export const getTheme = (name) => { // export theme
  return Object.prototype.hasOwnProperty.call(themes, name) ? themes[name] : themes["default"];
};

/**
 * Wraps the description of a gist after a certain number of characters
 * @function
 * @param {string} description Gist description
 * @param {number} chars Number of characters to wrap
 * @returns {string} Wrapped description for SVG
 */
export const wrapDescription = (description="", chars) => {
  return description.replace(new RegExp(`(?![^\n]{1,${chars}}$)([^\n]{1,${chars}})\\s`, "g"), "$1</tspan><tspan dy=\"1.2em\" x=\"25\">"); // wrap description
};
