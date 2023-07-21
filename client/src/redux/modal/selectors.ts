import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/configureStore';

const modalState = (state: RootState) => state.modal;

export const modalTypeSelector = createSelector(modalState, (state) => state.type);
export const selectModalInfo = createSelector(modalState, (state) => state.modalInfo);
