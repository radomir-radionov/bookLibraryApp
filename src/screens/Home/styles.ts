import styled from 'styled-components';
import { device } from 'styles';

export const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  @media (max-width: ${device.tabletM}) {
    gap: 24px;
  }

  @media (max-width: ${device.tablet}) {
    gap: 20px;
    width: 288px;
  }
`;
