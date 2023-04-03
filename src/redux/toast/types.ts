import { ToastTypes } from 'types/toast';

export type ToastProps = {
  id: string;
  type: ToastTypes;
  text: string;
};

export type ToastStateProps = {
  toasts: ToastProps[];
};
