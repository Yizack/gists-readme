import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { getCard } from "../src/card.js";
import { getGists } from "../src/gists.js";

const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename); // path to current directory

const app = express(); // create express app

hbs.registerPartials(path.join(__dirname, "../templates/partials"), () => {}); // register partials

app.set("view engine", "hbs"); // set up hbs for templating
app.set("views", path.join(__dirname, "../templates")); // set up views directory

app.get("/api/", async (req, res) => {
  let card = getCard(req.query, await getGists(req.query.user)); // get card
  res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
  res.render("default", card); // render default template
});

export default app;
