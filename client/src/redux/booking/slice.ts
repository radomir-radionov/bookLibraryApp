import { createSlice } from '@reduxjs/toolkit';

import { TBookingState } from './types';

const initialState: TBookingState = {
  bookId: null,
  isLoading: false,
};

export const bookingSlice = createSlice({
  name: 'BOOKING',
  initialState,
  reducers: {
    setBookId: (state, { payload }) => {
      state.bookId = payload;
    },
    postBooking: (state, { payload }) => {
      state.isLoading = true;
    },
    putRebooking: (state, { payload }) => {
      state.isLoading = true;
    },
    deleteBooking: (state, { payload }) => {
      state.isLoading = true;
    },
    cancelLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;
