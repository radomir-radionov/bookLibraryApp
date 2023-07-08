import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserStateProps } from './types';
import { TUserData } from 'types/user';

const initialState: UserStateProps = {
  jwt: '',
  userData: {} as TUserData,
  enteredBookName: '',
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    setJwt: (state, { payload }) => {
      state.jwt = payload;
    },
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
    getUser: (state) => {
      state.isLoading = true;
    },
    clearUser: () => {
      return initialState;
    },
    setBookName: (state, { payload }: PayloadAction<string>) => {
      state.enteredBookName = payload;
    },
    setAvatar: (state, { payload }: PayloadAction<string>) => {
      if (state.userData) {
        state.userData.avatar = payload;
      }
    },
    putComment: (state, { payload }) => {
      state.isLoading = true;
    },
    postComments: (state, { payload }) => {
      state.isLoading = true;
    },
    putEditUserData: (state, { payload }) => {
      state.isLoading = true;
    },
    putUploadAvatar: (state, { payload }) => {
      state.isLoading = true;
    },
    deletelBooking: (state, { payload }) => {
      state.isLoading = true;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
