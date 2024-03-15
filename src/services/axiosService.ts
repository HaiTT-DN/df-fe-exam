import { getAccessToken, getRefreshToken } from "@/services/cookieService";
import axios from "axios";

export const generateToken = () => ({
  Authorization: `Bearer ${getAccessToken()}`,
});

export const generateRefreshToken = () => ({
  Authorization: `Bearer ${getRefreshToken()}`,
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

function getRefreshTokenApi(apiURL: string, options: any = {}) {
  return axios.get(apiURL, {
    ...defaultOptions,
    ...options,
    headers: {
      ...options.headers,
      ...generateRefreshToken(),
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
  refreshToken: getRefreshTokenApi,
  post: postApi,
};

export default Api;
