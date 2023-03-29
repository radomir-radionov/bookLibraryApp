import { IUserData } from 'redux/user/types';

export type IAuthData = {
  identifier: string;
  password: string;
};

export type IAuthState = {
  step: number;
  authData: IAuthData;
  isLoading: boolean;
  errorStatus: number;
  responseMessage: string;
};

export type AuthResponseType = {
  jwt: string;
  user: IUserData;
};
