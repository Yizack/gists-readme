/**
 * @module api
 * @requires appManager
 * @requires Card
 * @requires gistsList
 */
import app from "../src/appManager.js";
import { getCard } from "../src/Card.js";
import { getGists } from "../src/gistsList.js";

/**
 * This endpoint displays the card on the browser
 * @memberof module:api
 * @name /api
 * @function
 * @async
 * @param {Object} req Request object
 * @param {Object} req.query Query object
 * @param {string} req.query.user Github username
 * @param {string} req.query.theme Theme name
 * @param {number} req.query.n Number of gists to display
 * @param {string} req.query.title Title of the card
 * @param {Object} res Response object
 */
app.get("/api", async (req, res) => {
  let card = getCard(req.query, await getGists(req.query.user)); // get card
  res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
  res.render("card", card); // render card template
});

export default app;
