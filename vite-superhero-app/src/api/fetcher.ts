import axios, { AxiosRequestConfig } from 'axios'

const fetcher = {
  get<T>(url: string, options?: AxiosRequestConfig) {
    return axios.get<T>(url, options)
  },
};

export { fetcher };
