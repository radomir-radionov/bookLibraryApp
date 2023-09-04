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

export type TAuthResponse = {
  jwt: string;
  user: TUser;
};
