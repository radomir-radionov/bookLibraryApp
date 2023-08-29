import styled, { css } from 'styled-components';
import { colors, device, other, typography } from 'styles';
import { BUTTON_VARIANTS } from 'types/button';

type ButtonStyledProps = {
  $variant: BUTTON_VARIANTS;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ $variant }) => ($variant === BUTTON_VARIANTS.LARGE ? '100%' : '350px')};
  padding: 15px 0;
  ${typography.desktop.BUTTON_LARGE};
  color: ${colors.MAIN_WHITE};
  background: ${other.LINEAR_GRADIENT};
  border-radius: 30px;

  ${({ $variant }) =>
    $variant === BUTTON_VARIANTS.SMALL &&
    css`
      width: 174px;
      display: block;
      height: 40px;
      padding: 0;
      ${typography.mobile.BUTTON_SMALL};
    `}

  &:hover {
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
  }

  &:disabled {
    outline: 1px solid ${colors.GREY_BLACK_20};
    color: ${colors.GREY_BLACK_40};
    background: ${colors.GREY_BLACK_5};
  }

  @media (max-width: ${device.laptop}) {
    width: ${({ $variant }) => ($variant === BUTTON_VARIANTS.LARGE ? '100%' : '306px')};
  }

  @media (max-width: ${device.tablet}) {
    width: 100%;
    padding: 11px 0;
    ${typography.mobile.BODY_SMALL}
  }
`;
