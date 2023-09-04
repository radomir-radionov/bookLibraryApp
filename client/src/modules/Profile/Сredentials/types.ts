export type TFormValues = {
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type TSubmitedData = {
  username?: string;
  login?: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

export type TFormPayload = {
  username: string;
  login?: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};
