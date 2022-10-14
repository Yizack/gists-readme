/**
 * @module Pin
 * @requires axios
 * @requires constants
 * @requires functions
 * @requires linkedom
 */
import axios from "axios";
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme, wrapDescription} from "./functions.js";
import { parseHTML } from "linkedom";

const { DEFAULT_THEME, BREAK_SIZE, PIN_WIDTH, PIN_HEIGHT, PIN_STATS_Y, CHARS_WRAP } = CONSTANTS; // get constants

/**
 * Returns the pin object
 * @function
 * @param {Object} query Query object
 * @param {string} query.user User name
 * @param {string} query.theme Theme name
 * @param {boolean} query.owner Owner flag
 * @param {Object} gist_response Gist response object 
 * @param {Object} gist_response.data Gist data
 * @returns {Object} Pin object
 */
export const getPin = async (query, gist_response) => {
  const { user, theme = DEFAULT_THEME, owner = false } = query; // get query parameters
  const gist = gist_response.data;
  const id = gist.id;
  const description = gist.description;
  const broken_description = wrapDescription(description, CHARS_WRAP); // wrap description
  const breaks = (broken_description.match(/dy/g) || []).length; // number of breaks
  const height = PIN_HEIGHT + (breaks * BREAK_SIZE); // pin height
  const y_stats = PIN_STATS_Y + (breaks * BREAK_SIZE); // y position of stats

  let filename, language, color;
  filename = language = color = "";
  if (gist.files) {
    filename = Object.keys(gist.files)[0];
    language = gist.files[Object.keys(gist.files)[0]].language;
    color = getLanguageColor(gist.files[Object.keys(gist.files)[0]].language);
  }

  let stars = 0;
  let forks = 0;
  
  try {
    await axios.get(`https://gist.github.com/${user}/${id}/stargazers`).then((dom) => {
      const { document } = parseHTML(dom.data);
      let nav = document.querySelector("[aria-label=\"Gist\"]");
      let stars_box = nav.querySelector("[data-hotkey=\"g s\"] span.Counter");
      let forks_box = nav.querySelector("[data-hotkey=\"g f\"] span.Counter");
      stars = stars_box ? stars_box.title : 0;
      forks = forks_box ? forks_box.title : 0;
    });
  }
  catch (error) {
    stars = 0;
    forks = 0;
  }

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
      "owner": owner,
    }
  };
};
