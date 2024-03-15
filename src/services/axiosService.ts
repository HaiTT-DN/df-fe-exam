import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  tokenIsExpired,
  getAccessToken,
} from "@/services/cookieService";
import axios from "axios";

export const generateToken = () => ({
  Authorization: `Bearer ${getAccessToken()}`,
  // todo
});

const defaultOptions = {};

function getApi(apiURL: string, options: any = {}) {
  return axios.get(apiURL, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

function postApi(apiURL: string, data: any, options: any = {}) {
  return axios.post(apiURL, data, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateToken(),
    },
  });
}

const Api = {
  get: getApi,
  post: postApi,
};

export default Api;
