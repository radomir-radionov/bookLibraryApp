import { ToastTypes } from 'types/toast';

export type TToast = {
  id: string;
  type: ToastTypes;
  text: string;
};

export type TToastState = {
  toasts: TToast[];
};
