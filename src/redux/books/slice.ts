import { createSlice } from '@reduxjs/toolkit';
import { TBook } from 'types/book';

import { sortBooksByRatingNormalizer } from './normalizer';
import { TBooksState } from './types';

const initialState: TBooksState = {
  books: [] as TBook[],
  isSortBooksByRating: true,
  isBooksLoading: false,
  booksError: { isError: false, message: '' },
};

export const booksSlice = createSlice({
  name: 'BOOKS',
  initialState,
  reducers: {
    getBooks: (state) => {
      state.isBooksLoading = true;
    },
    setBooks: (state, { payload }) => {
      state.books = payload;
      state.isBooksLoading = false;
    },
    setBooksError: (state, { payload }) => {
      state.booksError = payload;
      state.isBooksLoading = false;
    },
    sortBooksByRating: (state) => {
      state.isSortBooksByRating = !state.isSortBooksByRating;

      if (!state.isSortBooksByRating) {
        sortBooksByRatingNormalizer(state.books);
      }
    },
    cancelLoading: (state) => {
      state.isBooksLoading = false;
    },
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
