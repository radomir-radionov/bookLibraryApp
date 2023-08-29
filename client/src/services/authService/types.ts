export type PostRegistrationProps = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type PostAuthenticationProps = {
  email: string;
  password: string;
};

export type PostForgotPwdProps = {
  email: string;
};

export type PostResetPwdProps = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
