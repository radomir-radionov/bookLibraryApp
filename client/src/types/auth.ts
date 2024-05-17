import { TUser } from './user.js';

export type RegistrationResponseProps = {
  jwt: string;
  user: TUser;
};

export type AuthenticationProps = {
  jwt: string;
  user: TUser;
};

export type ForgotPwdProps = {
  ok: string;
};

export type ResetPwdProps = {
  jwt: string;
  user: TUser;
};
