import styled from 'styled-components';
import { device } from 'styles';

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;

  @media (max-width: ${device.laptopM}) {
    padding: 0 64px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 0 24px;
  }
`;
