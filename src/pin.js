/**
 * @module pin
 * @requires constants
 * @requires functions
 */
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme } from "../src/functions.js";

const { DEFAULT_THEME, BREAK_SIZE, PIN_HEIGHT, PIN_STATS_Y } = CONSTANTS; // get constants

/**
 * Returns the pin object
 * @function
 * @param {Object} query Query object
 * @param {string} query.user User name
 * @param {string} query.theme Theme name
 * @param {boolean} query.owner Owner flag
 * @param {Object} single_gist_response Gists response object 
 * @param {Object[]} single_gist_response.data Gists data
 * @param {number} single_gist_response.stars Gists stars
 * @param {number} single_gist_response.forks Gists forks
 * @returns {Object} Pin object
 */
export const getPin = (query, single_gist_response) => {
  const { user, theme = DEFAULT_THEME, owner = false } = query; // get query parameters
  const { data, stars, forks } = single_gist_response; // get gist data
  const gist = data[0]; // get gist
  let description = gist.description; // gist description
  description = description.replace(/(?![^\n]{1,60}$)([^\n]{1,60})\s/g, "$1</tspan><tspan dy=\"1.2em\" x=\"25\">"); // wrap description
  let breaks = (description.match(/dy/g) || []).length; // number of breaks
  let height = PIN_HEIGHT + (breaks * BREAK_SIZE); // pin height
  let y_stats = PIN_STATS_Y + (breaks * BREAK_SIZE); // y position of stats

  return { // pin
    "gist": gist,
    "user": user,
    "description": description,
    "stars": stars,
    "forks": forks,
    "height": height,
    "y_stats": y_stats,
    "owner": owner,
    "theme": getTheme(theme),
    "filename": Object.keys(gist.files)[0], // gist filename
    "language": gist.files[Object.keys(gist.files)[0]].language, // gist language
    "gistColor": getLanguageColor(gist.files[Object.keys(gist.files)[0]].language) // gist language color
  };
};
