import styled, { css } from 'styled-components';
import { colors, device, other } from 'styles';

import { BTN_FILTER_VARIANTS } from './types';

type TButtonStyled = {
  $variant?: BTN_FILTER_VARIANTS;
  $isActive?: boolean;
  $visible?: boolean;
};

export const ButtonFilteringStyled = styled.button<TButtonStyled>`
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding: 9px;
  border: 0;
  border-radius: ${({ $variant }) => ($variant === BTN_FILTER_VARIANTS.ROUND ? '50%' : '20px')};

  ${({ $variant, $isActive }) => {
    return $variant === BTN_FILTER_VARIANTS.OVAL
      ? css`
          background-color: ${colors.MAIN_WHITE};
        `
      : css`
          background: ${$isActive ? other.LINEAR_GRADIENT : colors.MAIN_WHITE};

          path {
            fill: ${$isActive ? colors.MAIN_WHITE : colors.GREY_BLACK_40};
          }
        `;
  }};

  filter: ${other.MAIN_FILTER};
  transition: all 0.1s ease-out;

  &:nth-child(2) {
    margin-right: 0;
  }

  &:hover {
    filter: ${other.FILTER_СRYSTAL};
  }

  &:active {
    box-shadow: none;
    filter: ${other.FILTER_LIGHT};
  }

  @media (max-width: ${device.tablet}) {
    display: flex;
    width: 38px;
  }
`;
