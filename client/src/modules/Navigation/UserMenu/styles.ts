import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors, device, formalization, other, typography } from 'styles';

export const UserMenuStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 270px;
  padding: 32px;
  padding-top: 42px;
  border-radius: 0px 0px 10px 10px;
  ${typography.desktop.H5}
  background-color: ${colors.MAIN_WHITE};
  box-shadow: -4px 4px 4px 0px rgba(54, 54, 54, 0.05), 4px 4px 4px 0px rgba(54, 54, 54, 0.05);

  @media (max-width: ${device.laptop}) {
    width: 100%;
    background-color: ${colors.GREY_BLACK_5};
  }

  @media (max-width: ${device.tabletM}) {
    padding: 32px 16px 52px 16px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: ${colors.MAIN_ACCENT};
  }
`;

export const NavLinkStyled = styled(NavLink)<{ $pathStartsWithBooks?: boolean }>`
  flex: 1;
  max-width: 258px;
  text-align: right;
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

  @media (max-width: ${device.laptop}) {
    text-align: left;
  }
`;
