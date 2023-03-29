import styled from 'styled-components';
import { device } from 'styles';

export const ProfileStyled = styled.article`
  display: flex;
  flex-direction: column;
  gap: 92px;
  max-width: 1100px;
  width: 100%;
  margin-bottom: 62px;

  @media (max-width: ${device.laptopM}) {
    padding: 0 64px;
  }

  @media (max-width: ${device.tablet}) {
    gap: 42px;
    padding: 0 16px;
    margin-bottom: 32px;
  }
`;
