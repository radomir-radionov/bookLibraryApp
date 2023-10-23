import serverEndpoints from 'constants/apiEndpoints';

import { TAuthResponse } from 'redux/auth/types';
import { AxiosResponse } from 'axios';

import httpService from '../../http';

import { PostAuthenticationProps, TPostForgotPwdReq, PostRegistrationProps, TPostResetPwdReq } from './types';

const authService = {
  postRegistration: async (payload: PostRegistrationProps) => {
    await httpService.post(serverEndpoints.REGISTRATION, payload);
  },
  postAuthentication: async (payload: PostAuthenticationProps) => {
    const { data }: AxiosResponse<TAuthResponse> = await httpService.post(serverEndpoints.AUTHORIZATION, payload, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
    });

    return data;
  },
  postForgotPwd: async (payload: TPostForgotPwdReq) => {
    const { data } = await httpService.post(serverEndpoints.FORGOT_PWD, payload);

    return data;
  },
  postResetPwd: async (payload: TPostResetPwdReq) => {
    await httpService.post(serverEndpoints.RESET_PWD, payload);
  },
};

export default authService;
