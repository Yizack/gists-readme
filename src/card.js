/**
 * @module Card
 * @requires constants
 * @requires functions
 */
import { CONSTANTS } from "./constants.js";
import { getLanguageColor, getTheme } from "./functions.js";

const { X_LEFT, X_RIGHT, Y_DOWN, MAX_GISTS, DEFAULT_THEME, DEFAULT_TITLE, CARD_WIDTH, CARD_HEIGHT } = CONSTANTS; // get constants

/**
 * Returns the card object
 * @function
 * @param {Object} query Query object
 * @param {string} query.theme Theme name
 * @param {number} query.n Number of gists to display
 * @param {string} query.title Title of the card
 * @param {Object[]} gistsResponse Gists response
 * @returns {Object} Card object
 */
export const getCard = (query, gistsResponse) => {
  const { theme = DEFAULT_THEME, n = MAX_GISTS, title = DEFAULT_TITLE } = query; // get query parameters
  let gists = []; // array of gists
  let x = X_LEFT; // x position of gist
  let y = 0; // y position of gist
  let i = 0; // counter
  let newLine = false; // new line flag

  gistsResponse.filter(gist => gist.public).some((gist) => {
    let filename = Object.keys(gist.files)[0]; // gist filename
    let language = gist.files[filename].language; // gist language
    let langColor = getLanguageColor(language); // gist language color

    gists.push({
      filename: filename, // gist filename
      language: language, // gist language
      langColor: langColor, // gist language color
      y: y, // y position of gist
      x: x // x position of gist
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
      y += Y_DOWN; // y next position: down
    }

    i++; // increment counter

    return i == n; // stop iterating after n gists
  });

  let height = CARD_HEIGHT + y;
  height = (i % 2 == 0) ? height - Y_DOWN : height; // height of the card

  return { // card
    theme: getTheme(theme), // theme
    gists: gists,
    value: {
      title: title || DEFAULT_TITLE,
      height: height,
      width: CARD_WIDTH
    }
  };
};
