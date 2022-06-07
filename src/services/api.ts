import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';
import { BASE_URL, REQUEST_TIMEOUT } from '../const/api';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error),
  );

  return api;
};
