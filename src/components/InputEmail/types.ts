import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  register: UseFormRegisterReturn;
  labelText: string;
  errors?: FieldError;
  isDisabled?: boolean;
};
