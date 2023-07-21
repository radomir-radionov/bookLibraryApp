import { ReactNode } from 'react';

export type TInputProps = {
  name: string;
  labelText: string;
  error?: string | boolean;
  required?: boolean;
  isDisabled?: boolean;
  customHint?: ReactNode;
};
