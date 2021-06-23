import axios from "axios";

const endpoint = "https://60d1e7945b017400178f4ac0.mockapi.io/";

export const mapsAPI = {
  getAPIKeys: async () => {
    const { data } = await axios.get(endpoint + "api-keys");
    return data;
  },
  getMaps: async () => {
    const { data } = await axios.get(endpoint + "maps");
    return data;
  },
};
