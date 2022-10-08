import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config(); // load environment variables

export const getGists = async (user) => {
  try {
    return await axios.get(`https://api.github.com/users/${user}/gists`, { headers: { Authorization:  `token ${process.env.token}` } });
  }
  catch {
    return { data: [] };
  }
};
