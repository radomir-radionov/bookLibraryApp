export type TPostRegistrationPayload = {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type TPostLoginPayload = {
  email: string;
  password: string;
};

export type TPostForgotPwdPayload = {
  email: string;
};

export type TPostResetPwdPayload = {
  password: string;
  passwordConfirmation: string;
  code: string;
};
