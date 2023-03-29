import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const BookedBookStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  @media (max-width: ${device.tablet}) {
    gap: 12px;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const BookWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Title = styled.h4`
  ${typography.desktop.H4};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.H3}
  }
`;

export const AssistiveText = styled.p`
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_40};

  @media (max-width: ${device.tablet}) {
    ${typography.mobile.BODY_LARGE};
  }
`;
