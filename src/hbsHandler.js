/**
 * @module hbsHandler
 * @requires hbs
 * @requires fs
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

export const defineHbsHandler = (handle, options) => {
  return async (req, res) => {
    const data = await handle({ req, res });
    const templateSource = fs.readFileSync(path.join(viewsDir, `${options.template}.hbs`)).toString();
    const render = hbs.handlebars.compile(templateSource);
    const svg = render(data);
    res.setHeader("Cache-Control", "max-age=0, s-maxage=14400");
    res.setHeader("Content-Type", "image/svg+xml"); // set content type to svg
    return res.status(200).send(svg);
  };
};
