import { Booking, RateBook } from 'modules/Modals';

type ModalTypesProps = {
  RATE_BOOK: string;
  BOOKING: string;
};

export const MODAL_TYPES: ModalTypesProps = {
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

export type IModalSelectorData = {
  modalInfo: {
    [key: string]: IModalInfo;
  };
  modalTypeArray: TModalType[];
};
