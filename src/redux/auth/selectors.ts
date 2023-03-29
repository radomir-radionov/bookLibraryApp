import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const authState = (state: RootState) => state.auth;

export const selectStep = createSelector(authState, (state) => state.step);

export const selectAuthData = createSelector(authState, (state) => state.authData);

export const selectIsLoading = createSelector(authState, (state) => state.isLoading);

export const selectErrorStatus = createSelector(authState, (state) => state.errorStatus);

export const selectResponseMessage = createSelector(authState, (state) => state.responseMessage);
