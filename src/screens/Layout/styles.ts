import styled from 'styled-components';
import { device } from 'styles';

export const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  /* gap: 62px; */

  @media (max-width: ${device.laptopM}) {
    /* gap: 54px; */
  }

  @media (max-width: ${device.tablet}) {
    /* gap: 32px; */
  }
`;
