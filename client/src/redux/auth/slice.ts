import { createSlice } from '@reduxjs/toolkit';

import { TAuthData, TAuthState } from './types';

const initialState: TAuthState = {
  step: 1,
  authData: {} as TAuthData,
  isLoading: false,
  errorStatus: 0,
  responseMessage: '',
};

export const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    setStep: (state, { payload }) => {
      state.step = payload;
    },
    postLogin: (state, { payload }) => {
      const { data } = payload;

      state.authData = data;
      state.isLoading = true;
    },
    postLogout: (state) => {
      state.isLoading = true;
    },
    checkAuth: (state) => {
      state.isLoading = true;
    },
    setErrorStatus: (state, { payload }) => {
      state.errorStatus = payload;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
    setResponseMessage: (state, { payload }) => {
      state.responseMessage = payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
