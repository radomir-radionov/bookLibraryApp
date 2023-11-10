import axios from 'axios';

import serverEndpoints from 'constants/apiEndpoints';
import { authActions } from 'redux/auth';
import { TRefreshResponse } from 'redux/auth/types';
import store from 'store';

const $api = axios.create({
  withCredentials: true,
  baseURL: serverEndpoints.API_URL,
});

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

$api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<TRefreshResponse>(`${serverEndpoints.API_URL}${serverEndpoints.REFRESH_URL}`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        store.dispatch(authActions.postLogout());
        console.log("User's token has expired. Please login again.");
      }
    }
    throw error;
  }
);

const httpService = {
  get: $api.get,
  post: $api.post,
  put: $api.put,
  delete: $api.delete,
};

export default httpService;
