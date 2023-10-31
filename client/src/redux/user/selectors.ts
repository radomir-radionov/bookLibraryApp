import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.user;

export const selectUser = createSelector(userState, (state) => state.userData);
export const selectAdditionalInfo = createSelector(userState, (state) => state.additionalInfo);
export const selectAuth = createSelector(userState, (state) => state.isAuth);
export const selectUserDataId = createSelector(userState, (state) => state.userData.id);
export const selectJwt = createSelector(userState, (state) => state.jwt);
export const enteredBookName = createSelector(userState, (state) => state.enteredBookName);
export const selectIsLoading = createSelector(userState, (state) => state.isLoading);
