import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const bookingState = (state: RootState) => {
  return state.booking;
};

export const selectBookId = createSelector(bookingState, (state) => {
  return state.bookId;
});

export const selectIsLoadingBooking = createSelector(bookingState, (state) => {
  return state.isLoading;
});
