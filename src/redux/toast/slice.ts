import { createSlice } from '@reduxjs/toolkit';

import { ToastProps, ToastStateProps } from './types';

const initialState: ToastStateProps = {
  toasts: [] as ToastProps[],
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
