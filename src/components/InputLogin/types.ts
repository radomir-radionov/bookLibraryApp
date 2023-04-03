import { ReactNode } from 'react';

export type TInputProps = {
  name: string;
  labelText: string;
  isDisabled?: boolean;
  error?: string | boolean;
  customHint?: ReactNode;
  required?: boolean;
};
