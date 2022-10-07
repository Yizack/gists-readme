import express from "express";
import hbs from "hbs";
import axios from "axios";
import * as dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from "module";

dotenv.config();
const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename) // path to current directory
const require = createRequire(import.meta.url);

const languages = require("../resources/language_colors.json");
const themes = require("../resources/themes.json");

// Card default constants
const X_LEFT = 0
const X_RIGHT = 200
const Y_POSITION = 25;
const MAX_GISTS = 30;
const DEFAULT_THEME = "default";
const DEFAULT_TITLE = "My Gists";
const WIDTH = 495;

const getLanguageColor = (name) => {
  return languages.hasOwnProperty(name) ? languages[name].color : "#ededed";
};

const getTheme = (name) => {
  return themes.hasOwnProperty(name) ? themes[name] : themes["default"];
};

const app = express(); // create express app
hbs.registerPartials(path.join(__dirname, "../templates/partials"), (err) => {}); // register partials
app.set("view engine", "hbs"); // set up hbs for templating
app.set("views", path.join(__dirname, "../templates")); // set up views directory
app.get("/api/", async (req, res) => {
  const { // get query params
    user, // github username
    theme = DEFAULT_THEME, // theme name
    n = MAX_GISTS, // number of gists to show
    title = DEFAULT_TITLE // title of the card
  } = req.query;

  const { token } = process.env; // github token from env
  
  await axios.get(`https://api.github.com/users/${user}/gists`, { headers: { Authorization:  `token ${token}` } }).then(async (response) => {
    let gists = []; // array of gists
    let x = X_LEFT; // x position of gist
    let y = 0; // y position of gist
    let i = 0; // counter
    let newLine = false; // new line flag
    
    await response.data.some((d) => {
      let filename = Object.keys(d.files)[0]; // gist filename
      let language = d.files[filename].language; // gist language
      let gistColor = getLanguageColor(language); // gist language color
      
      gists.push({
        "file": filename,
        "language": language,
        "gistColor": gistColor,
        "y" : y,
        "x" : x
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
        newLine = false;
        y = y + Y_POSITION; // y next position: down
      }
      i++;

      return i == n; // stop iterating after n gists
    });

    let height = y + 100; // height of the card

    res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
    res.render("default", { // render the card
      "theme": getTheme(theme),
      "title": title || DEFAULT_TITLE,
      "gists": gists,
      "height": height,
      "width": WIDTH
    });

  }); 
});

export default app;
