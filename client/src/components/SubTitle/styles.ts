import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const SubTitleStyled = styled.h5`
  display: flex;
  align-items: center;
  width: 350px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${colors.GREY_BLACK_10};
  margin-right: 0 !important;
  margin-bottom: 16px;
  ${typography.desktop.H5};

  @media (max-width: ${device.laptop}) {
    width: 305px;
    ${typography.desktop.SUBTITLE_LARGE};
  }

  @media (max-width: ${device.tablet}) {
    width: 288px;
    padding-bottom: 8px;
    margin-bottom: 12px;
    ${typography.mobile.H3};
  }

  @media (max-width: ${device.mobileS}) {
    width: 100%;
  }
`;
