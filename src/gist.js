/**
 * @module gist
 * @requires axios
 * @requires dotenv
*/
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config(); // load environment variables

/**
 * This function returns a Gist object from the GitHub API for a given gist id
 * @function
 * @async
 * @param {string} id Gist id
 * @returns {Object} Gist object
 */
export const getGist = async (id) => {
  try {
    return await axios.get(`https://api.github.com/gists/${id}`, { headers: { Authorization:  `Bearer ${process.env.token}` } });
  }
  catch {
    return { data: {} };
  }
};
