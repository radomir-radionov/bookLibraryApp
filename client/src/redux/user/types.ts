import { TExtendedUserInfo, TUser } from 'types/user';

export type TUserState = {
  jwt: string;
  userData: TUser;
  additionalInfo: TExtendedUserInfo;
  enteredBookName: string;
  isLoading: boolean;
};

export type PutEditUserDataResponseProps = {
  jwt: string;
  user: TUser;
};

export type TPutCommentRes = {
  commentId: number;
  data: {
    userId: number;
    bookId: number;
    rating: number;
    text: string;
    createdAt: string;
    updatedAt: string;
  };
};
