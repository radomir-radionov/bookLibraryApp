import { TUserData } from 'types/user';

export type TCredentials = {
  data: TUserData;
};

export type TFormValues = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type TSubmitedData = {
  username?: string;
  login?: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
