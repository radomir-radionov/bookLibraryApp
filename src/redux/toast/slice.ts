import { createSlice, nanoid } from '@reduxjs/toolkit';

import { ToastProps, ToastStateProps } from './types';

const initialState: ToastStateProps = {
  alert: {} as ToastProps,
};

export const toastSlice = createSlice({
  name: 'TOAST',
  initialState,
  reducers: {
    addToast: (state, { payload }) => {
      const alert: ToastProps = {
        id: nanoid(),
        ...payload,
      };

      state.alert = alert;
    },
    removeAlert: () => initialState,
  },
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;
