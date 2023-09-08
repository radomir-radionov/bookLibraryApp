import { createSlice } from '@reduxjs/toolkit';

import { TBookingState } from './types';

const initialState: TBookingState = {
  isLoading: false,
};

export const bookingSlice = createSlice({
  name: 'BOOKING',
  initialState,
  reducers: {
    createBookingReq: (state, { payload }) => {
      state.isLoading = true;
    },
    updateBookingReq: (state, { payload }) => {
      state.isLoading = true;
    },
    deleteBookingReq: (state, { payload }) => {
      state.isLoading = true;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;
