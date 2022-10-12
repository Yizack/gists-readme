/**
 * @module Pin
 * @requires constants
 * @requires functions
 */
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme, wrapDescription} from "./functions.js";

const { DEFAULT_THEME, BREAK_SIZE, PIN_WIDTH, PIN_HEIGHT, PIN_STATS_Y, CHARS_WRAP } = CONSTANTS; // get constants

/**
 * Returns the pin object
 * @function
 * @param {Object} query Query object
 * @param {string} query.user User name
 * @param {string} query.theme Theme name
 * @param {boolean} query.owner Owner flag
 * @param {Object} gist_response Gists response object 
 * @param {Object[]} gist_response.data Gists data
 * @param {number} gist_response.stars Gists stars
 * @param {number} gist_response.forks Gists forks
 * @returns {Object} Pin object
 */
export const getPin = (query, gist_response) => {
  const { user, theme = DEFAULT_THEME, owner = false } = query; // get query parameters
  const { data, stars, forks } = gist_response; // get gist data
  const gist = data[0]; // get gist
  const description = wrapDescription(gist.description, CHARS_WRAP); // wrap description
  const breaks = (description.match(/dy/g) || []).length; // number of breaks
  const height = PIN_HEIGHT + (breaks * BREAK_SIZE); // pin height
  const y_stats = PIN_STATS_Y + (breaks * BREAK_SIZE); // y position of stats

  return { // pin
    "gist": gist,
    "user": user,
    "description": description,
    "stars": stars,
    "forks": forks,
    "height": height,
    "width": PIN_WIDTH,
    "y_stats": y_stats,
    "owner": owner,
    "theme": getTheme(theme), // get theme
    "filename": Object.keys(gist.files)[0], // gist filename
    "language": gist.files[Object.keys(gist.files)[0]].language, // gist language
    "gistColor": getLanguageColor(gist.files[Object.keys(gist.files)[0]].language) // gist language color
  };
};
