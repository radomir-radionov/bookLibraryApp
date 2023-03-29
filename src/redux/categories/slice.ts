import { createSlice } from '@reduxjs/toolkit';

import { CategoriesStateProps } from './types';

const initialState: CategoriesStateProps = {
  categories: [],
  isCategoriesLoading: false,
  categoriesError: { isError: false, message: '' },
};

export const categoriesSlice = createSlice({
  name: 'CATEGORIES',
  initialState,
  reducers: {
    getCategories: (state) => {
      state.isCategoriesLoading = true;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
      state.isCategoriesLoading = false;
    },
    setCategoriesError: (state, { payload }) => {
      state.categoriesError = payload;
      state.isCategoriesLoading = false;
    },
    cancelLoading: (state) => {
      state.isCategoriesLoading = false;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
