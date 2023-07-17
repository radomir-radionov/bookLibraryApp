import { IUserData } from 'redux/user/types';

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
  user: IUserData;
};
