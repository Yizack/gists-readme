/**
 * @module gistsList
 * @requires ofetch
*/
import { $fetch } from "ofetch";

/**
 * This function returns the gists object from the GitHub API for a given user
 * @function
 * @async
 * @param {string} user Github username
 * @returns {Promise<{data: any[]}>} Gists object
 */
export const getGists = async (user) => {
  const req = await $fetch(`https://api.github.com/users/${user}/gists`, { headers: { Authorization: `Bearer ${process.env.token}` } }).catch(() => null);

  if (!req || !req.length) return [];
  return req;
};
