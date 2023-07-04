import styled from 'styled-components';
import { device } from 'styles';

export const ProfileInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 92px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: ${device.laptopM}) {
    gap: 64px;
  }

  @media (max-width: ${device.tablet}) {
    gap: 42px;
  }
`;
