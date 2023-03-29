import styled from 'styled-components';
import { device, typography } from 'styles';

export const BookStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  flex: 1;
  max-width: 1100px;
  margin-bottom: 42px;
  transition: all 0.2s ease-out;

  @media (max-width: ${device.laptopM}) {
    gap: 52px;
    width: 100%;
    padding: 0 64px 0;
  }

  @media (max-width: ${device.tablet}) {
    padding: 0 16px 0;
    margin-bottom: 20px;
  }
`;

export const Content = styled.section`
  display: none;

  @media (max-width: ${device.laptop}) {
    display: block;
  }
`;

export const Paragraph = styled.p`
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

export const Rating = styled.section``;

export const RateBox = styled.div`
  display: flex;
  gap: 26px;

  @media (max-width: ${device.mobileM}) {
    div > div > svg {
      width: 37px;
      height: 37px;
    }
  }
`;

export const RateQty = styled.div`
  display: flex;
  align-items: center;
  ${typography.desktop.H5};
`;
