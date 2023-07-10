import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const displayingContentState = (state: RootState) => state.displayingContent;

export const displayingBooks = createSelector(displayingContentState, (state) => state.displayingBooks);
