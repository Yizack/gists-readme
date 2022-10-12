/**
 * @module appManager
 * @requires express
 * @requires hbs
 * @requires path
 * @requires url
 */
import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename); // path to current directory

const app = express(); // create express app

hbs.registerPartials(path.join(__dirname, "../templates/partials"), () => {}); // register partials

app.set("view engine", "hbs"); // set up hbs for templating
app.set("views", path.join(__dirname, "../templates")); // set up views directory

export default app;
