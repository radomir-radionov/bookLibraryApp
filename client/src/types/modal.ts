import { Booking, RateBook } from 'modules/Modals';

type TModalTypes = {
  RATE_BOOK: string;
  BOOKING: string;
};

export const MODAL_TYPES: TModalTypes = {
  RATE_BOOK: 'RATE_BOOK',
  BOOKING: 'BOOKING',
};

export const MODALS_MAPPING = {
  [MODAL_TYPES.RATE_BOOK]: RateBook,
  [MODAL_TYPES.BOOKING]: Booking,
};

export type TModalType = string;

export type IModalInfo = {
  [key: string]: any;
};

export type IModalSelector = {
  modalInfo: {
    [key: string]: IModalInfo;
  };
  modalTypeArray: TModalType[];
};
