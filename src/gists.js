/**
 * @module gists
 * @requires axios
 * @requires dotenv
*/
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config(); // load environment variables

/**
 * This function returns the gists object from the GitHub API for a given user
 * @function
 * @async
 * @param {string} user Github username
 * @returns {Object} Gist response object
 */
export const getGists = async (user) => {
  try {
    return await axios.get(`https://api.github.com/users/${user}/gists`, { headers: { Authorization:  `token ${process.env.token}` } });
  }
  catch {
    return { data: [] };
  }
};
