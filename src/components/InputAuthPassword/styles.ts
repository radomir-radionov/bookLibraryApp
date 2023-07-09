import { FieldError } from 'react-hook-form';
import { ActionUnvisible_Icon, ActionVisible_Icon, Check_Icon } from 'assets';
import styled, { css } from 'styled-components';
import { colors, device, typography } from 'styles';

type TWrapper = {
  $errors?: FieldError;
};

type InputStyled = {
  $errors?: FieldError;
  autoComplete: string;
};

export const Wrapper = styled.div<TWrapper>`
  height: 76px;

  p {
    transition: all 0.2s ease;
    color: ${({ $errors }) => {
      return $errors ? `${colors.OTHER_NEGATIVE}` : null;
    }};
  }

  span > mark {
    ${typography.desktop.INFO_LARGE};
    color: ${colors.GREY_BLACK_40};
  }

  span > span {
    ${typography.desktop.INFO_LARGE};
    color: ${colors.GREY_BLACK_40};

    @media (max-width: ${device.tablet}) {
      padding: 0;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  cursor: text;
`;

export const LabelText = styled.span`
  position: absolute;
  bottom: 5px;
  left: 12px;
  ${typography.desktop.BODY_SMALL}
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;

export const InputStyled = styled.input<InputStyled>`
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
    ${typography.desktop.INFO_LARGE}
    font-weight: 400;
    color: ${colors.GREY_BLACK_40};
    transform: translate3d(0, -14px, 0);
  }

  &:focus {
    + span {
      ${typography.desktop.INFO_LARGE}
      font-weight: 400;
      color: ${colors.GREY_BLACK_40};
      transform: translate3d(0, -14px, 0);
    }
  }

  @media (max-width: ${device.tablet}) {
    padding: 26px 46px 12px 12px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  bottom: 0;
  cursor: pointer;
`;

export const CheckIcon = styled(Check_Icon)`
  position: absolute;
  right: 45px;
  bottom: 2px;
`;

export const ActionUnvisibleIcon = styled(ActionUnvisible_Icon)``;

export const ActionVisibleIcon = styled(ActionVisible_Icon)``;
