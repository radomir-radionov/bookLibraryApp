import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDisplayingContentState } from './types';

const initialState: IDisplayingContentState = {
  isSearchBarOpen: false,
  isBurgerMenuOpen: false,
  displayingBooks: 'tiles',
};

export const displayingContentSlice = createSlice({
  name: 'DISPLAYING_CONTENT',
  initialState,
  reducers: {
    setSearchBarOpen: (state) => {
      state.isSearchBarOpen = !state.isSearchBarOpen;
    },
    setBurgerMenuOpen: (state) => {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    },
    closeBurgerMenu: (state) => {
      state.isBurgerMenuOpen = false;
    },
    setDisplayingBooks: (state, { payload }: PayloadAction<string>) => {
      state.displayingBooks = payload;
    },
  },
});

export const displayingContentActions = displayingContentSlice.actions;

export default displayingContentSlice.reducer;
