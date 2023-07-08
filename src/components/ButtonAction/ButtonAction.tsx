import { MouseEvent, ReactNode } from 'react';

import { ButtonActionStyled } from './styles';
import { BTN_FILTER_VARIANTS } from './types';

type TProps = {
  type?: 'button' | 'submit';
  value?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  mix?: boolean | string;
  variant?: BTN_FILTER_VARIANTS;
  visible?: boolean;
  dataTestId?: string;
};

const ButtonAction = ({
  type = 'button',
  value = '',
  children,
  className,
  onClick,
  variant = BTN_FILTER_VARIANTS.ROUND,
  mix = '',
  visible = true,
  dataTestId = '',
}: TProps) => {
  return (
    <ButtonActionStyled
      type={type}
      value={value}
      className={className}
      onClick={onClick}
      mix={mix}
      $variant={variant}
      $visible={visible}
      data-test-id={dataTestId}
    >
      {children}
    </ButtonActionStyled>
  );
};

export default ButtonAction;
