import styled, { css } from 'styled-components';
import { colors, device, other } from 'styles';

import { BTN_FILTER_VARIANTS } from './types';

type ButtonStyledProps = {
  value: string;
  mix?: string | boolean;
  $variant?: BTN_FILTER_VARIANTS;
  $visible?: boolean;
};

export const ButtonActionStyled = styled.button<ButtonStyledProps>`
  display: ${({ $visible }) => {
    return $visible ? 'flex' : 'none';
  }};
  justify-content: center;
  align-items: center;
  padding: 9px;

  ${({ $variant, value, mix }) => {
    return $variant === BTN_FILTER_VARIANTS.OVAL
      ? css`
          background-color: ${colors.MAIN_WHITE};
        `
      : css`
          background: ${value === mix ? other.LINEAR_GRADIENT : colors.MAIN_WHITE};

          path {
            fill: ${value === mix ? colors.MAIN_WHITE : colors.GREY_BLACK_40};
          }
        `;
  }};

  border: 0;
  border-radius: ${({ $variant }) => {
    return $variant === BTN_FILTER_VARIANTS.ROUND ? '50%' : '20px';
  }};
  filter: drop-shadow(0px 2px 4px rgba(191, 196, 201, 0.2)) drop-shadow(0px 3px 4px rgba(191, 196, 201, 0.18))
    drop-shadow(0px 1px 5px rgba(191, 196, 201, 0.24));
  transition: all 0.1s ease-out;

  &:nth-child(2) {
    margin-right: 0;
  }

  &:hover {
    filter: drop-shadow(0px 2px 5px rgba(54, 54, 54, 0.1));
  }

  &:active {
    box-shadow: none;
    filter: drop-shadow(0px 3px 4px rgba(222, 125, 11, 0.2)) drop-shadow(0px 1px 10px rgba(249, 89, 8, 0.2));
  }

  @media (max-width: ${device.tablet}) {
    display: flex;
    width: 38px;
  }
`;
