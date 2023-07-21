import styled from 'styled-components';
import { device } from 'styles';

export const LayoutHomeStyled = styled.main`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  padding: 62px 0;

  @media (max-width: ${device.laptopM}) {
    padding: 32px 64px 62px;
  }

  @media (max-width: ${device.tablet}) {
    justify-content: center;
    padding: 8px 16px 62px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  max-width: 1100px;
`;
