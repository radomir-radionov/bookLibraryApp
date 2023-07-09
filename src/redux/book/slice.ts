import { createSlice } from '@reduxjs/toolkit';
import { TBookDetailed } from 'types/book';

import { BookStateProps } from './types';

const initialState: BookStateProps = {
  book: {} as TBookDetailed,
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
      state.book = {} as TBookDetailed;
    },
  },
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
