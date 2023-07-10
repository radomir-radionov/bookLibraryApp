import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors, device, formalization, other, typography } from 'styles';

export const UserMenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 32px 32px 52px 32px;
  ${typography.desktop.H5}
  border-top: 1px solid ${colors.GREY_BLACK_20};

  @media (max-width: ${device.laptop}) {
    width: 100%;
  }

  @media (max-width: ${device.tabletM}) {
    padding: 32px 16px 52px 16px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  cursor: pointer;

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;

export const NavLinkStyled = styled(NavLink)<{ $pathStartsWithBooks?: boolean }>`
  flex: 1;
  transition: color 0.3s;

  &.active {
    padding-bottom: 8px;
    border-bottom: 1px solid transparent;
    border-image: ${other.LINEAR_GRADIENT};
    border-image-slice: 1;
    ${typography.desktop.H5}
    ${formalization.HOVER}
  }

  ${({ $pathStartsWithBooks }) =>
    $pathStartsWithBooks &&
    css`
      padding-bottom: 8px;
      border-bottom: 1px solid transparent;
      border-image: ${other.LINEAR_GRADIENT};
      border-image-slice: 1;
      ${typography.desktop.H5}
      ${formalization.HOVER}
    `}
`;
