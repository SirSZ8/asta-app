import axios from "axios";
import config from "../config";

const ENDPOINT = "/products";

const list = () => {
  return axios.get(`${config.BASE_URL}${ENDPOINT}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { list };
