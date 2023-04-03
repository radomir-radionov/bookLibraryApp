import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const toastState = (state: RootState) => state.toast;

export const selectToasts = createSelector(toastState, (state) => state.toasts);
