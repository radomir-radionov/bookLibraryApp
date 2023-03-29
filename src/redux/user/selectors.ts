import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const userState = (state: RootState) => {
  return state.user;
};

export const selectUser = createSelector(userState, (state) => {
  return state.userData;
});

export const selectUserDataId = createSelector(userState, (state) => {
  return state?.userData?.id;
});

export const selectAvatar = createSelector(userState, (state) => {
  return state?.userData?.avatar;
});

export const selectUserBooking = createSelector(userState, (state) => {
  return state?.userData?.booking;
});

export const selectUserDelivery = createSelector(userState, (state) => {
  return state?.userData?.delivery;
});

export const selectUserComments = createSelector(userState, (state) => {
  return state?.userData?.comments;
});

export const selectUserHistory = createSelector(userState, (state) => {
  return state?.userData?.history;
});

export const selectJwt = createSelector(userState, (state) => {
  return state.jwt;
});

export const enteredBookName = createSelector(userState, (state) => {
  return state.enteredBookName;
});

export const selectIsLoading = createSelector(userState, (state) => {
  return state.isLoading;
});
