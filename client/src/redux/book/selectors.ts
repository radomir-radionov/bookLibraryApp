import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const bookState = (state: RootState) => state.book;

export const bookDataState = createSelector(bookState, (state) => state);
export const selectBook = createSelector(bookState, (state) => state.book);
export const selectBookComments = createSelector(bookState, (state) => state.book.comments);
export const selectIsBookLoading = createSelector(bookState, (state) => state.isBookLoading);
export const bookError = createSelector(bookState, (state) => state.bookError);
