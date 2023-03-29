import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

export default interface IInputProps {
  labelText: string;
  watchValue: string;
  register: UseFormRegisterReturn;
  errors?: FieldError;
}
