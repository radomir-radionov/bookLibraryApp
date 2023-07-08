import { TUserData } from 'types/user';

export type CredentialsProps = {
  data: TUserData;
};

export type FormValuesProps = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type SubmitedDataProps = {
  username?: string;
  login?: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
