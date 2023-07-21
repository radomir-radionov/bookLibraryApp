import { FieldError, UseFormClearErrors, UseFormRegisterReturn } from 'react-hook-form';

export default interface InputProps {
  register: UseFormRegisterReturn;
  labelText: string;
  watchValue: string;
  clearErrors?: UseFormClearErrors<any>;
  errors?: FieldError;
  payload?: any;
}

export type Ref = HTMLInputElement;
