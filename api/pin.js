/**
 * @memberof api
 * @requires appManager
 * @requires Pin
 * @requires gist
 */
import app from "./../src/appManager.js";
import { getPin } from "./../src/pin.js";
import { getGist } from "./../src/gist.js";

/**
 * This endpoint displays the card on the browser
 * @memberof module:api
 * @name /api/pin
 * @function
 * @async
 * @param {Object} req Request object
 * @param {Object} req.query Query object
 * @param {string} req.query.user Github username
 * @param {string} req.query.id Gist id
 * @param {string} req.query.theme Theme name
 * @param {boolean} req.query.owner Show gist owner
 * @param {Object} res Response object
 */
app.get("/api/pin", async (req, res) => {
  const pin = await getPin(req.query, await getGist(req.query.id)); // get card
  res.setHeader("Cache-Control", "max-age=0, s-maxage=14400");
  res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
  res.render("pin", pin); // render pin template
});

export default app;
