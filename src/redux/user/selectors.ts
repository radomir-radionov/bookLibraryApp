import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const userState = (state: RootState) => state.user;

export const selectUser = createSelector(userState, (state) => state.userData);
export const selectUserDataId = createSelector(userState, (state) => state?.userData?.id);
export const selectAvatar = createSelector(userState, (state) => state?.userData?.avatar);
export const selectUserBooking = createSelector(userState, (state) => state?.userData?.booking);
export const selectUserComments = createSelector(userState, (state) => state?.userData?.comments);
export const selectUserHistory = createSelector(userState, (state) => state?.userData?.history);
export const selectJwt = createSelector(userState, (state) => state.jwt);
export const enteredBookName = createSelector(userState, (state) => state.enteredBookName);
export const selectIsLoading = createSelector(userState, (state) => state.isLoading);
