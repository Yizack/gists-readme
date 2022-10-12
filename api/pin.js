/**
 * @memberof api
 * @requires appManager
 * @requires Pin
 * @requires gist
 */
import express from "express";
import hbs from "hbs";
import path from "path";
import { getPin } from "../src/Pin.js";
import { getSingleGist } from "../src/gist.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename); // path to current directory

const app = express(); // create express app

hbs.registerPartials(path.join(__dirname, "../templates/partials"), () => {}); // register partials

app.set("view engine", "hbs"); // set up hbs for templating
app.set("views", path.join(__dirname, "../templates")); // set up views directory

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
  let pin = getPin(req.query, await getSingleGist(req.query)); // get card
  res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
  res.render("pin", pin); // render pin template
});

export default app;
