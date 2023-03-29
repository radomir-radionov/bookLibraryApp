import { FieldError, UseFormClearErrors, UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  view: 'form' | 'profile';
  register: UseFormRegisterReturn;
  name?: string;
  labelText: string;
  watchValue: string;
  clearErrors?: UseFormClearErrors<any>;
  errors?: FieldError;
  isDisabled?: boolean;
}
