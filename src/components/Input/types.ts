import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  type?: string;
  value?: string;
  labelText: string;
  watchValue?: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
  isDisabled?: boolean;
}
