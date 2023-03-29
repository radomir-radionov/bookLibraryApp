import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const toastState = (state: RootState) => state.toast;

export const selectToastData = createSelector(toastState, (state) => state.alert);
