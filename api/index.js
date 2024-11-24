/**
 * @module api
 * @requires hbsHandler
 * @requires Card
 * @requires gistsList
 */
import { defineHbsHandler } from "../src/hbsHandler.js";
import { getCard } from "./../src/card.js";
import { getGists } from "./../src/gistsList.js";

/**
 * This endpoint displays the card on the browser
 * @memberof module:api
 * @name /api
 * @function
 * @async
 * @param {Object} event.req Request object
 * @param {Object} event.req.query Query object
 * @param {string} event.req.query.user Github username
 * @param {string} event.req.query.theme Theme name
 * @param {number} event.req.query.n Number of gists to display
 * @param {string} event.req.query.title Title of the card
 * @param {Object} event.res Response object
 */
export default defineHbsHandler (async (event) => {
  const query = event.req.query;
  const gists = await getGists(query.user);
  const data = getCard(query, gists); // get card
  return data;
}, { template: "card" });
