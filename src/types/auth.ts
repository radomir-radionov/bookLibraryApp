export type UserProps = {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type RegistrationResponseProps = {
  jwt: string;
  user: UserProps;
};

export type AuthenticationProps = {
  jwt: string;
  user: UserProps;
};

export type ForgotPwdProps = {
  ok: string;
};

export type ResetPwdProps = {
  jwt: string;
  user: UserProps;
};
