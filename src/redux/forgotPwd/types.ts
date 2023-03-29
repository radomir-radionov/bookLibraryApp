export type ForgotPwdState = {
  step: number;
  email: string;
  newPassword: string;
  confirmedPassword: string;
  resetPwdData: { password: string; passwordConfirmation: string; code: string };
  isLoading: boolean;
  responseMessage: string;
};
