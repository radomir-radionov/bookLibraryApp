import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalInfo, TModalType } from 'types/modal';

import { TModalState } from './types';

const initialState: TModalState = {
  type: '',
  modalInfo: {},
};

export const modalSlice = createSlice({
  name: 'Modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<{ type: TModalType; modalInfo?: IModalInfo }>) => {
      const { type, modalInfo } = action.payload;

      state.type = type;
      state.modalInfo = modalInfo || {};
    },
    close: () => {
      return initialState;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
