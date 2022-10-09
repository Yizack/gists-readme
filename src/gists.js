/** @module gists */
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config(); // load environment variables

/**
 * Returns a list of gists for a given user
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
