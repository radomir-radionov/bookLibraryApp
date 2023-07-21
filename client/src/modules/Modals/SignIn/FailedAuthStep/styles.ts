import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 600px;
  padding: 48px 92px;
  background: ${colors.MAIN_WHITE};
  border-radius: 16px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.tablet}) {
    width: 288px;
    gap: 24px;
    padding: 42px 16px 32px;
  }
`;

export const Text = styled.p`
  text-align: center;
  ${typography.desktop.BODY_LARGE}
`;

export const Title = styled.h4`
  text-align: center;
  ${typography.desktop.H4}
`;
