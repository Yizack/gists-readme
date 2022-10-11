/**
 * @module api
 * @requires express
 * @requires hbs
 * @requires path
 * @requires url
 * @requires card
 * @requires gists
 */
import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { getCard } from "../src/card.js";
import { getGists } from "../src/gists.js";

const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename); // path to current directory

/** Initializes express
 * @constant
 * @type {Object}
 * @namespace app
 */
const app = express(); // create express app

hbs.registerPartials(path.join(__dirname, "../templates/partials"), () => {}); // register partials

app.set("view engine", "hbs"); // set up hbs for templating
app.set("views", path.join(__dirname, "../templates")); // set up views directory

/**
 * This endpoint displays the card on the browser
 * @memberof module:api~app
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
  res.render("default", card); // render default template
});

export default app;
