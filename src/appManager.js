/**
 * @module appManager
 * @requires hbs
 * @requires path
 * @requires url
 */
import hbs from "hbs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // Get the current directory
const __dirname = path.dirname(__filename); // path to current directory

hbs.handlebars.registerHelper("subtract", (lVal, rVal) => lVal - rVal); // register hbs helper to subtract two numbers

const viewsDir = path.join(__dirname, "../templates");

export const hbsRender = (name, data) => {
  try {
    const templateSource = fs.readFileSync(path.join(viewsDir, `${name}.hbs`)).toString();
    const template = hbs.handlebars.compile(templateSource);
    return template(data);
  }
  catch (error) {
    throw new Error("Error rendering template: " + error);
  }
};
