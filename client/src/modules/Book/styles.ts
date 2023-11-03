import styled from 'styled-components';
import { device, typography } from 'styles';

export const BookStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  max-width: 1100px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptopM}) {
    gap: 52px;
    padding: 0 64px;
  }

  @media (max-width: ${device.tablet}) {
    padding: 0 16px;
  }
`;

export const Content = styled.section`
  display: none;

  @media (max-width: ${device.laptop}) {
    display: block;
  }
`;

export const Text = styled.p`
  ${typography.desktop.BODY_LARGE}

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_SMALL}
  }
`;

export const Additional = styled.article`
  display: flex;
  flex-direction: column;
  gap: 62px;

  @media (max-width: ${device.tablet}) {
    gap: 28px;
  }
`;
