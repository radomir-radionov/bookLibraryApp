import styled from 'styled-components';
import { device } from 'styles';

export const LayoutHomeStyled = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 62px 0;

  @media (max-width: ${device.laptopM}) {
    padding: 32px 64px 0;
  }

  @media (max-width: ${device.tablet}) {
    justify-content: center;
    padding: 8px 16px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
`;
