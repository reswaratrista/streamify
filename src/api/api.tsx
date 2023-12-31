import axios, { AxiosResponse } from "axios";

const url = "https://tubes-tst-production.up.railway.app";

export const post = async (
  api: string,
  form: any
): Promise<AxiosResponse<any, any>> => {
  return await axios.post(url + api, form, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const postWithAuth = async (
  api: string,
  form: any
): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(url + api, form, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
  });
};

export const postWithAuthJson = async (
  api: string,
  json: any
): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(url + api, json, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

export const get = async (
  apiParams: string
): Promise<AxiosResponse<any, any>> => {
  return await axios.get(url + apiParams);
};

export const getWithAuth = async (
  apiParams: string
): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem('accessToken');
  return await axios.get(url + apiParams, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
};

export const deleteWithAuth = async (
  api: string
): Promise<AxiosResponse<any, any>> => {
  const token = localStorage.getItem('accessToken');
  return await axios.delete(url + api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
