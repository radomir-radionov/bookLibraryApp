import { FieldError, UseFormClearErrors, UseFormRegisterReturn } from 'react-hook-form';

export default interface IInputProps {
  view: 'form' | 'profile';
  register: UseFormRegisterReturn;
  labelText: string;
  watchValue: string;
  clearErrors?: UseFormClearErrors<any>;
  errors?: FieldError;
  isDisabled?: boolean;
}
