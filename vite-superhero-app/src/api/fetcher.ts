import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const fetcher = {
  get<T>(url: string, options?: AxiosRequestConfig) {
    return axios.get<T>(url, options);
  },
};

export { fetcher };
