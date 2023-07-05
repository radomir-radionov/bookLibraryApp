import styled from 'styled-components';
import { device } from 'styles';

export const BookStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 42px;
  width: 100%;
  min-height: 80vh;
  padding: 42px 0;

  @media (max-width: ${device.laptopM}) {
    gap: 48px;
    padding: 24px 0 48px;
  }

  @media (max-width: ${device.tablet}) {
    gap: 20px;
    padding: 20px 0;
  }
`;
