/**
 * @module Pin
 * @requires constants
 * @requires functions
 */
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme, wrapDescription } from "./functions.js";

const { DEFAULT_THEME, BREAK_SIZE, PIN_WIDTH, PIN_HEIGHT, PIN_STATS_Y, CHARS_WRAP } = CONSTANTS; // get constants

/**
 * Returns the pin object
 * @function
 * @param {Object} query Query object
 * @param {string} query.theme Theme name
 * @param {boolean} query.owner Owner flag
 * @param {Object} gist_response Gist response object
 * @param {Object} gist_response.data Gist data
 * @param {Object} gist_response.data.viewer Viewer object
 * @param {Object} gist_response.data.viewer.gist Gist object
 * @returns {Object} Pin object
 */
export const getPin = async (query, gist_response) => {
  const { theme = DEFAULT_THEME, owner = false } = query; // get query parameters

  const gist = gist_response.data.viewer.gist;
  const user = gist?.owner?.login;
  const description = gist?.description;
  const stars = gist?.stargazers?.totalCount;
  const forks = gist?.forks?.totalCount;

  let filename, language, color;
  filename = language = color = "";
  if (gist?.files) {
    filename = gist.files[0].name;
    language = gist?.files[0].language.name;
    color = getLanguageColor(gist.files[0].language.name);
  }

  const broken_description = wrapDescription(description, CHARS_WRAP); // wrap description
  const breaks = (broken_description.match(/dy/g) || []).length; // number of breaks
  const height = PIN_HEIGHT + (breaks * BREAK_SIZE); // pin height
  const y_stats = PIN_STATS_Y + (breaks * BREAK_SIZE); // y position of stats

  return { // pin
    "theme": getTheme(theme), // get theme
    "gist": {
      "user": user,
      "filename": filename, // gist filename
      "description": description,
      "broken_description": broken_description,
      "language": language, // gist language
      "lang_color": color, // gist language color
      "stars": stars,
      "forks": forks
    },
    "value": {
      "height": height,
      "width": PIN_WIDTH,
      "y_stats": y_stats,
      "owner": owner ? JSON.parse(owner) : false
    }
  };
};
