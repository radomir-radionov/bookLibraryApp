export type IRegistrationData = {
  login?: string;
  password?: string;
  name?: string;
  surname?: string;
  phone?: string;
  email?: string;
};

export type IRegistrationState = {
  step: number;
  registrationData: IRegistrationData;
  isLoading: boolean;
  responseMessage: string;
};
