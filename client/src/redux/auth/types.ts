import { string } from 'yup';
import { TUser } from 'types/user.js';

export type TAuthData = {
  identifier: string;
  password: string;
};

export type TAuthState = {
  step: number;
  authData: TAuthData;
  isLoading: boolean;
  errorStatus: number;
  responseMessage: string;
};

export type TRefreshResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};

export type TRegistrationResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};

export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};
