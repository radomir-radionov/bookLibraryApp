import styled from 'styled-components';
import { device, typography } from 'styles';

export const Container = styled.section``;

export const RateBox = styled.div`
  display: flex;
  gap: 26px;

  @media (max-width: ${device.mobileM}) {
    div > div > svg {
      width: 37px;
      height: 37px;
    }
  }
`;

export const RateQty = styled.div`
  display: flex;
  align-items: center;
  ${typography.desktop.H5};
`;
