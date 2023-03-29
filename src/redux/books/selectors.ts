import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const booksState = (state: RootState) => {
  return state.books;
};

export const selectBooks = createSelector(booksState, (state) => state.books);

export const selectIsBooksLoading = createSelector(booksState, (state) => state.isBooksLoading);

export const booksError = createSelector(booksState, (state) => state.booksError);

export const selectIsSortByRating = createSelector(booksState, (state) => state.isSortBooksByRating);
