import axios, { type AxiosInstance } from 'axios';

const getAxios = (timeout: number = 600000) => {
  const instance: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: timeout,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return instance;
};

export default getAxios;
