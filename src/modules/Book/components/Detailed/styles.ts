import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const DetailedStyled = styled.section``;

export const TColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Table = styled.div`
  display: flex;
  gap: 146px;

  @media (max-width: ${device.laptop}) {
    gap: 30px;
  }

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
  }
`;

export const TRow = styled.div`
  display: flex;
  gap: 70px;

  @media (max-width: ${device.laptop}) {
    gap: 32px;
  }
`;

export const TProp = styled.div`
  min-width: 120px;
  ${typography.desktop.SUBTITLE_LARGE}
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.laptop}) {
    ${typography.mobile.INFO_LARGE}
  }
`;

export const TValue = styled.div`
  ${typography.desktop.BODY_LARGE}

  @media (max-width: ${device.laptop}) {
    ${typography.mobile.INFO_SMALL}
  }
`;
