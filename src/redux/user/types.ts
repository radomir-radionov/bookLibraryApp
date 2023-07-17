import { TUserData } from 'types/user';

export type IUserData = {
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

export type TUserState = {
  jwt: string;
  userData: TUserData;
  enteredBookName: string;
  isLoading: boolean;
};

export type PutEditUserDataResponseProps = {
  jwt: string;
  user: IUserData;
};
