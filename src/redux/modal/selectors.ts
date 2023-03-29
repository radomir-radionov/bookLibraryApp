import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const modalState = (state: RootState) => {
  return state.modal;
};

export const modalTypeSelector = createSelector(modalState, (state) => {
  return state.type;
});

export const selectModalInfo = createSelector(modalState, (state) => {
  return state.modalInfo;
});
