import styled, { css } from 'styled-components';
import { colors, device, other, typography } from 'styles';

type ButtonStyledProps = {
  $buttonValue?: string;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 174px;
  display: block;
  height: 40px;
  ${typography.mobile.BUTTON_SMALL};

  ${({ $buttonValue }) => {
    switch ($buttonValue) {
      case 'currentCustomer':
        return css`
          border: 1px solid ${colors.GREY_BLACK_20};
          color: ${colors.MAIN_DARK};
          background: ${colors.MAIN_WHITE};
        `;
      case 'noBooking':
        return css`
          color: ${colors.MAIN_WHITE};
          background: ${other.LINEAR_GRADIENT};
        `;
      case 'anotherCustomer':
        return css`
          border: 1px solid ${colors.GREY_BLACK_20};
          color: ${colors.GREY_BLACK_40};
          background: ${colors.GREY_BLACK_5};
        `;
      case 'onHands':
        return css`
          border: 1px solid ${colors.GREY_BLACK_20};
          color: ${colors.GREY_BLACK_40};
          background: ${colors.GREY_BLACK_5};
        `;
      default:
        return css``;
    }
  }}

  border-radius: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 5px rgba(54, 54, 54, 0.1);
  }

  &:active {
    box-shadow: 0px 3px 4px rgba(222, 125, 11, 0.2), 0px 1px 10px rgba(249, 89, 8, 0.2);
  }

  &:disabled {
    ${({ $buttonValue }) => {
      return $buttonValue === 'anotherCustomer' || $buttonValue === 'onHands'
        ? css`
            border: 1px solid ${colors.GREY_BLACK_20};
            color: ${colors.GREY_BLACK_40};
            background: ${colors.GREY_BLACK_5};
          `
        : null;
    }}
  }

  @media (max-width: ${device.mobileL}) {
    width: 100%;
  }
`;
