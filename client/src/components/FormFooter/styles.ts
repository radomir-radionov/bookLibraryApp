import { Link } from 'react-router-dom';
import { ChevronRight_Icon } from 'assets';
import styled from 'styled-components';
import { colors, device, typography } from 'styles';

export const Container = styled.div`
  display: flex;
  gap: 16px;
  ${typography.desktop.BODY_LARGE};
  color: ${colors.GREY_BLACK_70};

  @media (max-width: ${device.tablet}) {
    flex-direction: column;
    gap: 4px;
    ${typography.mobile.BODY_LARGE};
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 14px;
  ${typography.mobile.BUTTON_SMALL};
  color: ${colors.MAIN_DARK};
  cursor: pointer;
`;

export const IconBox = styled.span`
  display: flex;
  align-items: center;
`;

export const ChevronRightIcon = styled(ChevronRight_Icon)``;
