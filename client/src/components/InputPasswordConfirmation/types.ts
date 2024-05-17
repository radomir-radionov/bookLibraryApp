import { FieldError, UseFormClearErrors, UseFormRegisterReturn } from 'react-hook-form';

export type TInputProps = {
  name: string;
  register: UseFormRegisterReturn;
  labelText: string;
  watchValue: string;
  clearErrors?: UseFormClearErrors<any>;
  error?: string;
  payload?: any;
};

export type Ref = HTMLInputElement;
