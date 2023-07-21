export type TRegistrationData = {
  login?: string;
  password?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
};

export type TRegistrationState = {
  step: number;
  registrationData: TRegistrationData;
  isLoading: boolean;
  responseMessage: string;
};
