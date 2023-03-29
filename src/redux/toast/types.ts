import { ToastTypes } from 'types/toast';

export type ToastProps = {
  type: ToastTypes;
  text: string;
};

export type ToastStateProps = {
  alert: ToastProps;
};
