import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TDisplayingContentState } from './types';

const initialState: TDisplayingContentState = {
  isSearchBarOpen: false,
  displayingBooks: 'tiles',
};

export const displayingContentSlice = createSlice({
  name: 'DISPLAYING_CONTENT',
  initialState,
  reducers: {
    setSearchBarOpen: (state) => {
      state.isSearchBarOpen = !state.isSearchBarOpen;
    },

    setDisplayingBooks: (state, { payload }: PayloadAction<string>) => {
      state.displayingBooks = payload;
    },
  },
});

export const displayingContentActions = displayingContentSlice.actions;

export default displayingContentSlice.reducer;
