import { createSlice } from '@reduxjs/toolkit';
import { BookDetailedProps } from 'types/book';

import { BookStateProps } from './types';

const initialState: BookStateProps = {
  book: {} as BookDetailedProps,
  isBookLoading: false,
  bookError: { isError: false, message: '' },
};

export const bookSlice = createSlice({
  name: 'BOOK',
  initialState,
  reducers: {
    getBook: (state, { payload }) => {
      state.isBookLoading = true;
    },
    setBook: (state, { payload }) => {
      state.book = payload;
      state.isBookLoading = false;
    },
    setBookError: (state, { payload }) => {
      state.bookError = payload;
      state.isBookLoading = false;
    },
    cancelLoading: (state) => {
      state.isBookLoading = false;
    },
    clearBookData: (state) => {
      state.book = {} as BookDetailedProps;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
