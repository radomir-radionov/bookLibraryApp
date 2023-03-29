import serverEndpoints from 'constants/apiEndpoints';

import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: serverEndpoints.HOST,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');

  if (token) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  return config;
});

const httpService = {
  get: $api.get,
  post: $api.post,
  put: $api.put,
  delete: $api.delete,
};

export default httpService;
