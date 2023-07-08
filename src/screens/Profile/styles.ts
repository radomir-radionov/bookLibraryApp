import styled from 'styled-components';
import { device } from 'styles';

export const ProfileStyled = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 62px 0 62px;

  @media (max-width: ${device.laptopM}) {
    gap: 42px;
    padding: 32px 64px 62px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 16px 16px 32px;
  }
`;

export const Content = styled.section`
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
