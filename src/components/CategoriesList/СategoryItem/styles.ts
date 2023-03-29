import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors, formalization, typography } from 'styles';

export const СategoryItemStyled = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;

export const Qty = styled.span`
  margin-left: 6px;
  ${typography.desktop.BODY_MEDIUM};
  color: ${colors.GREY_BLACK_40};
`;

export const NavLinkStyled = styled(NavLink)`
  transition: color 0.1s;
  ${typography.desktop.BODY_LARGE};

  &.active {
    span:first-child {
      ${formalization.BUTTON_PRESSED};
      font-weight: 700;
    }

    span:nth-child(2) {
      background: ${colors.MAIN_DARK};
      -webkit-background-clip: text;
      -webkit-text-fill-color: ${colors.MAIN_DARK};
      background-clip: text;
    }
  }
`;

export const NavText = styled.span`
  transition: color 0.3s;
  ${typography.desktop.BODY_LARGE}
`;
