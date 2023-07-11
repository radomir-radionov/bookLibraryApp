import { NavLink } from 'react-router-dom';
import { Chevron_Icon } from 'assets';
import styled, { css } from 'styled-components';
import { device, formalization, other, typography } from 'styles';

type TNavStyled = {
  $visible: boolean;
};

type TNavItem = {
  id: string;
  $isActive?: boolean;
  $categoryParam?: string;
};

type TChevronIcon = {
  $isOpen: boolean;
  $pathStartsWithBooks: boolean;
};

export const NavStyled = styled.nav<TNavStyled>`
  @media (max-width: ${device.laptop}) {
    display: ${({ $visible }) => ($visible ? 'initial' : 'none')};
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

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const NavItem = styled.li<TNavItem>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 258px;
  ${typography.desktop.H5};
  cursor: pointer;

  ${NavLinkStyled} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ChevronIcon = styled(Chevron_Icon)<TChevronIcon>`
  display: ${({ $pathStartsWithBooks }) => ($pathStartsWithBooks ? 'inline-block' : 'none')};
  rotate: ${({ $isOpen }) => ($isOpen ? '180deg' : 0)};
`;
