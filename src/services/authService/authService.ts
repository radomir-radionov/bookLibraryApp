import serverEndpoints from 'constants/apiEndpoints';

import { TAuthResponse } from 'redux/auth/types';
import { AxiosResponse } from 'axios';

import httpService from '../../http';

import { PostAuthenticationProps, PostForgotPwdProps, PostRegistrationProps, PostResetPwdProps } from './types';

const authService = {
  postRegistration: async (payload: PostRegistrationProps) => {
    await httpService.post(serverEndpoints.REGISTRATION, payload);
  },
  postAuthentication: async (payload: PostAuthenticationProps) => {
    const { data }: AxiosResponse<TAuthResponse> = await httpService.post(serverEndpoints.AUTHORIZATION, payload);

    return data;
  },

  postForgotPwd: async (payload: PostForgotPwdProps) => {
    const resp = await httpService.post(serverEndpoints.FORGOT_PWD, payload);

    return resp.data;
  },

  postResetPwd: async (payload: PostResetPwdProps) => {
    await httpService.post(serverEndpoints.RESET_PWD, payload);
  },
};

export default authService;
