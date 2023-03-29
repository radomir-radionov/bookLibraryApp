import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const categoriesState = (state: RootState) => {
  return state.categories;
};

export const selectCategories = createSelector(categoriesState, (state) => state.categories);

export const selectCategoriesLoading = createSelector(categoriesState, (state) => state.isCategoriesLoading);

export const categoriesError = createSelector(categoriesState, (state) => state.categoriesError);
