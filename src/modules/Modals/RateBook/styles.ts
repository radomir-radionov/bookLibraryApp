import { FieldError } from 'react-hook-form';
import { ActionClose_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type TextareaProps = {
  errors?: FieldError;
};

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 528px;
  padding: 48px 32px;
  background: ${colors.MAIN_WHITE};
  border-radius: 16px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    padding: 24px 16px;
    padding-top: 42px;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.h4`
  ${typography.desktop.H4};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3};
  }
`;

export const CloseBtnBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  button {
    width: 48px;
    height: 48px;
    background-color: ${colors.GREY_BLACK_5};
    filter: none;
  }

  @media (max-width: ${device.tablet}) {
    bottom: 24px;

    button {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${device.tablet}) {
    gap: 24px;
  }
`;

export const BtnField = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  button {
    max-width: 410px;
  }
`;

export const Textarea = styled.textarea<TextareaProps>`
  width: 100%;
  height: 132px;
  padding: 20px 12px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  border-radius: 4px;
  ${typography.desktop.BODY_LARGE};
  background-color: ${colors.GREY_BLACK_5};
  resize: none;
`;

export const ActionCloseIcon = styled(ActionClose_Icon)`
  width: 24px;
  height: 24px;

  path {
    fill: ${colors.ORANGE};
  }
`;
