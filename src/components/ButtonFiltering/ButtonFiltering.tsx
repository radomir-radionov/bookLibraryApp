import { MouseEvent, ReactNode } from 'react';

import { ButtonFilteringStyled } from './styles';
import { BTN_FILTER_VARIANTS } from './types';

type TProps = {
  type?: 'button' | 'submit';
  className?: string;
  isActive?: boolean;
  variant?: BTN_FILTER_VARIANTS;
  visible?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  dataTestId?: string;
};

const ButtonFiltering = ({
  type = 'button',
  children,
  className,
  onClick,
  variant = BTN_FILTER_VARIANTS.ROUND,
  isActive,
  visible = true,
  dataTestId = '',
}: TProps) => {
  return (
    <ButtonFilteringStyled
      type={type}
      className={className}
      onClick={onClick}
      $variant={variant}
      $isActive={isActive}
      $visible={visible}
      data-test-id={dataTestId}
    >
      {children}
    </ButtonFilteringStyled>
  );
};

export default ButtonFiltering;
