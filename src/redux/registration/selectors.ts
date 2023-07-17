import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

export const registrationState = (state: RootState) => state.registration;

export const selectStep = createSelector(registrationState, (state) => state.step);
export const selectRegistrationData = createSelector(registrationState, (state) => state.registrationData);
export const selectIsLoading = createSelector(registrationState, (state) => state.isLoading);
export const selectResponseMessage = createSelector(registrationState, (state) => state.responseMessage);
