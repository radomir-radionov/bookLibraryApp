import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const forgotPwdState = (state: RootState) => state.forgotPwd;

export const selectStep = createSelector(forgotPwdState, (state) => state.step);
export const selectResetPwdData = createSelector(forgotPwdState, (state) => state.resetPwdData);
export const selectIsLoading = createSelector(forgotPwdState, (state) => state.isLoading);
export const selectResponseMessage = createSelector(forgotPwdState, (state) => state.responseMessage);
