import { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { colors, typography } from 'styles';

type InputProps = {
  $errors?: FieldError;
};

export const Wrapper = styled.div`
  position: relative;
  height: 74px;

  height small {
    position: absolute;
    left: 0;
    top: 60px;
  }
`;

export const Label = styled.label`
  position: relative;
  cursor: text;
`;

export const LabelText = styled.span`
  position: absolute;
  bottom: 5px;
  left: 12px;
  ${typography.desktop.BODY_SMALL};
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const InputStyled = styled.input<InputProps>`
  width: 100%;
  height: 56px;
  padding: 12px;
  padding-top: 26px;
  border-radius: 4px 4px 0 0;
  border-bottom: 1px solid ${colors.GREY_BLACK_20};
  ${typography.desktop.BODY_SMALL};
  background-color: ${colors.GREY_BLACK_5};
  transition-duration: 0.3s;
  transition: all 0.2s ease;

  ${({ $errors }) =>
    $errors &&
    css`
      border-bottom: 1px solid ${colors.OTHER_NEGATIVE};
    `};

  &:not(:placeholder-shown) + span {
    ${typography.desktop.INFO_LARGE};
    font-weight: 400;
    color: ${colors.GREY_BLACK_40};
    transform: translate3d(0, -14px, 0);
  }

  &:focus {
    + span {
      ${typography.desktop.INFO_LARGE};
      font-weight: 400;
      color: ${colors.GREY_BLACK_40};
      transform: translate3d(0, -14px, 0);
    }
  }
`;
