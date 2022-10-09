/** @module card */
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme } from "../src/functions.js";

const { X_LEFT, X_RIGHT, Y_DOWN, MAX_GISTS, DEFAULT_THEME, DEFAULT_TITLE, WIDTH } = CONSTANTS; // get constants

/**
 * Returns the card object
 * @function
 * @param {Object} query Query object
 * @param {string} query.theme Theme name
 * @param {number} query.n Number of gists to display
 * @param {string} query.title Title of the card
 * @param {Object} gists_response Gists response object 
 * @param {Object[]} gists_response.data Gists data
 * @returns {Object} Card object
 */
export const getCard = (query, gists_response) => {
  const { theme = DEFAULT_THEME, n = MAX_GISTS, title = DEFAULT_TITLE } = query; // get query parameters
  let gists = []; // array of gists
  let x = X_LEFT; // x position of gist
  let y = 0; // y position of gist
  let i = 0; // counter
  let newLine = false; // new line flag

  gists_response.data.some((gist) => {
    let filename = Object.keys(gist.files)[0]; // gist filename
    let language = gist.files[filename].language; // gist language
    let gistColor = getLanguageColor(language); // gist language color
    
    gists.push({
      "file": filename, // gist filename
      "language": language, // gist language
      "gistColor": gistColor, // gist language color
      "y" : y, // y position of gist
      "x" : x // x position of gist
    });

    if (x == X_LEFT && !newLine) {
      x = X_RIGHT; // x next position: right
      newLine = true;
    }
    else if (x == X_RIGHT && !newLine) {
      x = X_LEFT; // x next position: left
    }

    if (newLine) {
      newLine = false; // next position same line
    }
    else {
      y = y + Y_DOWN; // y next position: down
    }

    i++; // increment counter

    return i == n; // stop iterating after n gists
  });

  let height = y + 100; // height of the card

  const card = { // card
    "theme": getTheme(theme),
    "title": title || DEFAULT_TITLE,
    "gists": gists,
    "height": height,
    "width": WIDTH
  }

  return card;
};
