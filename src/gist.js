/**
 * @module gist
 * @requires ofetch
 * @requires dotenv
*/
import { $fetch } from "ofetch";
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
  const query = `
    query gistInfo($gistId: String!) {
      viewer {
        gist(name: $gistId) {
          description
          owner {
            login
          }
          stargazers {
            totalCount
          }
          forks {
            totalCount
          }
          files {
            name
            language {
              name
            }
            size
          }
        }
      }
    }`;

  const req = await $fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.token}`
    },
    body: {
      query,
      variables: {
        gistId: id
      }
    }
  }).catch(() => null);

  if (!req || req.errors) return { data: { viewer: { gist: null } } };
  return req;
};
