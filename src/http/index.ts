import serverEndpoints from 'constants/apiEndpoints';

import axios from 'axios';

import handleUnauthorizedError from './helpers/handleUnauthorizedError';

const $api = axios.create({
  baseURL: serverEndpoints.HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    handleUnauthorizedError(error);

    return Promise.reject(error);
  }
);

const httpService = {
  get: $api.get,
  post: $api.post,
  put: $api.put,
  delete: $api.delete,
};

export default httpService;
