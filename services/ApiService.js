import axios from "axios";
import { API_ADDRESS } from "../environment";

const axiosInstance = axios.create({
  baseURL: API_ADDRESS,
  timeout: 10000
});

export const sendPostJsonRequest = (
  path,
  data = {},
  headers = { "Content-Type": "application/json" }
) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(path, data, headers)
      .then(result => resolve(result.data))
      .catch(err =>
        reject(err.response ? err.response.data.message : err.message)
      );
  });
};

export const sendPostRequest = (
    path,
  ) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(path)
        .then(result => resolve(result))
        .catch(err =>
          reject(err)
        );
    });
  };

  export const sendGetRequest = (
    path,
  ) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(path)
        .then(result => resolve(result))
        .catch(err =>
          reject(err)
        );
    });
  };

export const downloadRequestFile = (
  path,
  data = {},
  headers = { "Content-Type": "application/json", responseType: "blob" }
) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(path, data, headers)
      .then(result => resolve(result))
      .catch(err =>
        reject(err.response ? err.response.data.message : err.message)
      );
  });
};
