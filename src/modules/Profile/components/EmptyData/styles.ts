import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const EmptyDataStyled = styled.div`
  flex-basis: 218px;
  padding: 16px;
  ${typography.desktop.H3};
  color: ${colors.MAIN_WHITE};
  background: ${colors.BRAND_MAIN};
  opacity: 0.7;
  backdrop-filter: blur(10px);
  border-radius: 10px;

  @media (max-width: ${device.laptopM}) {
    flex-basis: 204px;
  }

  @media (max-width: ${device.tablet}) {
    flex-basis: 182px;
    ${typography.mobile.H3}
  }
`;

export const Text = styled.p``;
