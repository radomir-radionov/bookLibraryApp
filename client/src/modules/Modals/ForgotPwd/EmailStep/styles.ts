import { Link } from 'react-router-dom';
import { ChevronLeft_Icon, ChevronRight_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

type IAssistiveText = {
  $errors: boolean;
};

export const ModalStyled = styled.div`
  width: 528px;
  background: ${colors.MAIN_WHITE};
  border-radius: 16px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 56px 48px;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    padding: 32px 16px 48px;
  }
`;

export const Title = styled.h4`
  ${typography.desktop.H4};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${device.tablet}) {
    gap: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  ${typography.mobile.BUTTON_SMALL}
  color: ${colors.GREY_BLACK_70};
`;

export const InputField = styled.div``;

export const AssistiveText = styled.p<IAssistiveText>`
  padding-left: ${({ $errors }) => ($errors ? 0 : '12px')};
  ${typography.desktop.INFO_LARGE};
  color: ${colors.GREY_BLACK_40};
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Back = styled.div`
  padding: 20px 0px 20px 16px;
  background-color: ${colors.GREY_BLACK_5};
  border-radius: 16px 16px 0px 0px;
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  ${typography.mobile.BUTTON_SMALL};
  color: ${colors.GREY_BLACK_70};
  background-color: transparent;
`;

export const ChevronLeftIcon = styled(ChevronLeft_Icon)``;
