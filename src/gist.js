/**
 * @module gist
 * @requires axios
 * @requires linkedom
 * @requires gistsList
*/
import axios from "axios";
import { parseHTML } from "linkedom";
import { getGists } from "./gistsList.js";
console.time("getSingleGist");

/**
 * This function returns a Gist object from the GitHub API for a given user
 * @function
 * @async
 * @param {Object} query Query object
 * @param {string} query.user Github username
 * @param {string} query.id Gist id
 * @returns {Object} Gist response object
 */
export const getSingleGist = async (query) => {
  const { user, id } = query;
  const gists = await getGists(user);
  const gist = gists.data.filter((gist) => {
    return gist.id == id;
  });

  let response = {};

  await axios.get(`https://gist.github.com/${user}/${id}/stargazers`).then((dom) => {
    const { document } = parseHTML(dom.data);
    let nav = document.querySelector("[aria-label=\"Gist\"]");
    
    let stars_box = nav.querySelector("[data-hotkey=\"g s\"] span.Counter");
    let forks_box = nav.querySelector("[data-hotkey=\"g f\"] span.Counter");

    let stars = stars_box ? stars_box.title : 0;
    let forks = forks_box ? forks_box.title : 0;
    console.timeEnd("getSingleGist");
    response = {
      "data": gist,
      "stars": stars,
      "forks": forks,
    };
    
  });
  
  return response;
};
