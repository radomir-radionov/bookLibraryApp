import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const bookingState = (state: RootState) => state.booking;

export const selectBookId = createSelector(bookingState, (state) => state.bookId);
export const selectIsLoadingBooking = createSelector(bookingState, (state) => state.isLoading);
