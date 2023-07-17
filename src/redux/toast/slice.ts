import { createSlice } from '@reduxjs/toolkit';

import { TToast, TToastState } from './types';

const initialState: TToastState = {
  toasts: [] as TToast[],
};

export const toastSlice = createSlice({
  name: 'TOAST',
  initialState,
  reducers: {
    addToast: (state, { payload }) => {
      state.toasts = [...state.toasts, payload];
    },
    deleteToast: (state, { payload }) => {
      state.toasts = state.toasts.filter((toast) => toast.id !== payload);
    },
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
