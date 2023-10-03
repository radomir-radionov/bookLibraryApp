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

export type TPostForgotPwdReq = {
  email: string;
};

export type TPostResetPwdReq = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
