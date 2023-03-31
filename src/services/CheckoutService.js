import axios from "axios";
import config from "../config";

const ENDPOINT = "/carts";

const create = (checkout) => {
  return axios.post(`${config.BASE_URL}${ENDPOINT}`, checkout);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { create };
