import { createSlice } from '@reduxjs/toolkit';
import { PostResetPwdProps } from 'services/authService/types';

import { TForgotPwdState } from './types';

const initialState: TForgotPwdState = {
  step: 1,
  email: '',
  newPassword: '',
  confirmedPassword: '',
  resetPwdData: {} as PostResetPwdProps,
  isLoading: false,
  responseMessage: '',
};

export const forgotPwdSlice = createSlice({
  name: 'FORGOT_PWD',
  initialState,
  reducers: {
    setStep: (state) => {
      state.step = ++state.step;
    },
    setResetPwdData: (state, { payload }) => {
      state.resetPwdData = payload;
    },
    setDefiniteStep: (state, { payload }) => {
      state.step = payload;
      state.isLoading = false;
    },
    postForgotPwd: (state, { payload }) => {
      state.email = payload.email;
      state.isLoading = true;
    },
    postResetPwd: (state, { payload }) => {
      state.isLoading = true;
    },
    setResponseMessage: (state, { payload }) => {
      state.responseMessage = payload;
    },
  },
});

export const forgotPwdActions = forgotPwdSlice.actions;

export default forgotPwdSlice.reducer;
