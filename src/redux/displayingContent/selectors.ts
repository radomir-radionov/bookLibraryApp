import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const displayingContentState = (state: RootState) => {
  return state.displayingContent;
};

export const isSearchBarOpen = createSelector(displayingContentState, (state) => {
  return state.isSearchBarOpen;
});

export const isBurgerMenuOpen = createSelector(displayingContentState, (state) => {
  return state.isBurgerMenuOpen;
});

export const displayingBooks = createSelector(displayingContentState, (state) => {
  return state.displayingBooks;
});
