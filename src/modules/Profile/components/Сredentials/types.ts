import { UserDataProps } from 'types/user';

export type CredentialsProps = {
  userData: UserDataProps;
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
