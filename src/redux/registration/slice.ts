import { createSlice } from '@reduxjs/toolkit';

import { IRegistrationData, IRegistrationState } from './types';

const initialState: IRegistrationState = {
  step: 1,
  registrationData: {} as IRegistrationData,
  isLoading: false,
  responseMessage: '',
};

export const registrationSlice = createSlice({
  name: 'REGISTRATION',
  initialState,
  reducers: {
    setStep: (state) => {
      state.step = ++state.step;
    },
    setDefiniteStep: (state, { payload }) => {
      state.step = payload;
      state.isLoading = false;
    },
    setLoginStepData: (state, { payload }) => {
      state.registrationData = { ...state.registrationData, ...payload };
    },
    setNameStepData: (state, { payload }) => {
      state.registrationData = { ...state.registrationData, ...payload };
    },
    setContactStepData: (state, { payload }) => {
      state.registrationData = { ...state.registrationData, ...payload };
    },
    postRegistrationData: (state) => {
      state.isLoading = true;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
    setResponseMessage: (state, { payload }) => {
      state.responseMessage = payload;
    },
  },
});

export const registrationActions = registrationSlice.actions;

export default registrationSlice.reducer;
