import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const ExpiredMaskStyled = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: ${colors.MAIN_WHITE};
  background: rgba(255, 82, 83, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;

  @media (max-width: ${device.tablet}) {
    gap: 12px;
  }
`;

export const Title = styled.h3`
  width: 380px;
  ${typography.desktop.H3};

  @media (max-width: ${device.tablet}) {
    width: 218px;
    ${typography.mobile.H3};
  }
`;

export const Subtitle = styled.p`
  ${typography.desktop.SUBTITLE_LARGE};

  @media (max-width: ${device.tablet}) {
    width: 230px;
    ${typography.mobile.SUBTITLE_SMALL};
  }
`;
