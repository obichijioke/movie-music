import axios from "axios";
import { sha256 } from "js-sha256";

const baseURL = process.env.REACT_APP_BASE_URL;

const securedOpenUrls = [
  "/signup",
  "/recover",
  "/login",
  "/signup/verifytoken",
  "/signup/complete",
];

const defaultOptions = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(
  function (config) {
    let token = "";
    if (config.url.startsWith("/")) {
      if (securedOpenUrls.includes(config.url)) {
        let userAgent = window.navigator.userAgent;
        token = sha256(`${config.url + userAgent}`);
        //console.log(token)
      } else {
        token = localStorage.getItem("device_key");
      }
      config.headers.Authorization = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 403 && error.config.url.startsWith("/")) {
      localStorage.removeItem("device_key");
      localStorage.removeItem("user_details");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
