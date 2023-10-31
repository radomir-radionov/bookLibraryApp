import { AxiosResponse } from 'axios';

import serverEndpoints from 'constants/apiEndpoints';
import { TLoginResponse, TRefreshResponse, TRegistrationResponse } from 'redux/auth/types';
import httpService from '../../http';
import { TPostLoginPayload, TPostForgotPwdPayload, TPostRegistrationPayload, TPostResetPwdPayload } from './types';

const authService = {
  getRefreshAuth: async () => {
    const { data }: AxiosResponse<TRefreshResponse> = await httpService.get(serverEndpoints.REFRESH_URL);

    return data;
  },
  postRegistration: async (payload: TPostRegistrationPayload) => {
    const { data }: AxiosResponse<TRegistrationResponse> = await httpService.post(
      serverEndpoints.REGISTRATION_URL,
      payload
    );

    return data;
  },
  postLogin: async (payload: TPostLoginPayload) => {
    const { data }: AxiosResponse<TLoginResponse> = await httpService.post(serverEndpoints.LOGIN_URL, payload);

    return data;
  },
  postLogout: async () => await httpService.post(serverEndpoints.LOGOUT_URL),
  postForgotPwd: async (payload: TPostForgotPwdPayload) => {
    const { data } = await httpService.post(serverEndpoints.FORGOT_PWD, payload);

    return data;
  },
  postResetPwd: async (payload: TPostResetPwdPayload) => {
    await httpService.post(serverEndpoints.RESET_PWD, payload);
  },
};

export default authService;
