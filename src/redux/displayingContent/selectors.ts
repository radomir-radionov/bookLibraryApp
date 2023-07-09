import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const displayingContentState = (state: RootState) => state.displayingContent;

export const isSearchBarOpen = createSelector(displayingContentState, (state) => state.isSearchBarOpen);
export const isBurgerMenuOpen = createSelector(displayingContentState, (state) => state.isBurgerMenuOpen);
export const displayingBooks = createSelector(displayingContentState, (state) => state.displayingBooks);
