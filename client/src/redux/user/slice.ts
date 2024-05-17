import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TUserState } from './types';
import { TUser } from 'types/user';

const initialState: TUserState = {
  jwt: '',
  userData: {} as TUser,
  additionalInfo: {} as any,
  enteredBookName: '',
  isAuth: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setAuth: (state, { payload }) => {
      state.isAuth = payload;
    },
    setUser: (state, { payload }) => {
      state.userData = payload;
    },
    setExtendedUserlInfo: (state, { payload }) => {
      state.additionalInfo = payload;
    },
    getExtendeUserInfo: (state, { payload }) => {
      state.isLoading = true;
    },
    putUser: (state, { payload }) => {
      state.isLoading = true;
    },
    setBookName: (state, { payload }: PayloadAction<string>) => {
      state.enteredBookName = payload;
    },
    putComment: (state, { payload }) => {
      state.isLoading = true;
    },
    postComment: (state, { payload }) => {
      state.isLoading = true;
    },

    // avatar
    getUserAvatar: (state) => {
      state.isLoading = true;
    },
    setUserAvatar: (state, { payload }) => {
      state.userData.avatar = payload;
    },
    updateAvatarReq: (state, { payload }) => {
      state.isLoading = true;
    },

    cancelLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
