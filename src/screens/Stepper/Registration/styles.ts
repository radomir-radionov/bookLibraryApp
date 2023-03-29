import styled from 'styled-components';
import { colors, device, other, typography } from 'styles';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${other.LINEAR_GRADIENT};

  @media (max-width: ${device.tablet}) {
    align-items: flex-start;
    padding-top: 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: ${device.tablet}) {
    gap: 12px;
  }
`;

export const Title = styled.h3`
  ${typography.desktop.H3};
  text-align: center;
  color: ${colors.MAIN_WHITE};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3}
  }
`;
