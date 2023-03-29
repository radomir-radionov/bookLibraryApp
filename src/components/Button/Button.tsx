import { ReactNode } from 'react';
import { BUTTON_VARIANTS } from 'types/button';

import { ButtonStyled } from './styles';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: BUTTON_VARIANTS;
  disabled?: boolean;
  dataTestId?: string;
};

const Button = ({
  children,
  type = 'button',
  onClick,
  className,
  variant = BUTTON_VARIANTS.LARGE,
  disabled = false,
  dataTestId,
}: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      className={className}
      onClick={onClick}
      $variant={variant}
      disabled={disabled}
      data-test-id={dataTestId}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
