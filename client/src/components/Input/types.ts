import { ReactNode } from 'react';

export type TInput = {
  type?: string;
  name: string;
  labelText: string;
  error?: string | boolean;
  isDisabled?: boolean;
  required?: boolean;
};
