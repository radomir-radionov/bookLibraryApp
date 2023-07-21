import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const ModalStyled = styled.div`
  width: 528px;
  height: 466px;
  padding: 48px 56px;
  border-radius: 16px;
  background: ${colors.MAIN_WHITE};
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    padding: 24px 16px;
  }
`;

export const Title = styled.h4`
  ${typography.desktop.H4};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Hint = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_70};

  @media (max-width: ${device.tablet}) {
    padding: 0;
    ${typography.mobile.BODY_LARGE};
  }
`;

export const BtnField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
