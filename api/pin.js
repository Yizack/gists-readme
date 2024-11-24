/**
 * @memberof api
 * @requires hbsHandler
 * @requires Pin
 * @requires gist
 */
import { defineHbsHandler } from "../src/hbsHandler.js";
import { getPin } from "./../src/pin.js";
import { getGist } from "./../src/gist.js";

/**
 * This endpoint displays the card on the browser
 * @memberof module:api
 * @name /api/pin
 * @function
 * @async
 * @param {Object} event.req Request object
 * @param {Object} event.req.query Query object
 * @param {string} event.req.query.user Github username
 * @param {string} event.req.query.id Gist id
 * @param {string} event.req.query.theme Theme name
 * @param {boolean} event.req.query.owner Show gist owner
 * @param {Object} event.res Response object
 */
export default defineHbsHandler (async (event) => {
  const query = event.req.query;
  const gist = await getGist(query.id);
  const data = getPin(query, gist); // get card
  return data;
}, { template: "pin" });
